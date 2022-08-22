import React, { useContext, useEffect, useState, useRef } from 'react';
import userContext from '../../UserContext';
import UserCall from '../../userCall/UserCall';
import { FaReply } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import io from 'socket.io-client';
import { Peer } from 'peerjs'
import { socketAddress } from '../../../utils/Constants';
import '../../../sass/video_call.css'




const requestCamStream = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    });
    return stream;
}

const JoinCall = () => {
    const { user, setNavVisible } = useContext(userContext);

    const [Style, setMyStyle] = useState({
        bottom: '-20px'
    })

    const navi = useNavigate();
    const roomId = useParams().id;

    const mainVideoRef = useRef();
    const selfCamVideoRef = useRef()

    // Connection
    const socket = io(socketAddress)
    const peer = new Peer(user.uid);

    // const [users] = useState([1,2,4,5,4]);
    const [users, setUsers] = useState(new Set());


    const addCall = (call) => {
        setUsers(users => new Set([...users, call]))
    }

    // const removeUser = (usr) => {
    //     setUsers(users => {
    //         const temp = users;
    //         temp.delete(usr);
    //         return new Set([...temp]);
    //     })
    // }
    
    const quit = () => {
        console.log('head quit')
    }

    const callMainPeer = async () => {
        const str = await requestCamStream();
        const call = peer.call(roomId, str);

        call.on('stream', stream => {
            mainVideoRef.current.srcObject = stream;
        })

        call.on('close',()=>{
            quit();
        })
    }

    const makeCall = async(peerId) => {
        const selfStream = await requestCamStream();
        const call = peer.call(peerId, selfStream);

        if(!call) return;

        addCall(call)

    }



    peer.on('call', async (call) => {
        const str = await requestCamStream();
        addCall(call)
        call.answer(str);

        if(!call) return;

    })


    peer.on('open', (id) => {
        socket.emit("join-room", roomId, id)
        callMainPeer();
    })

    socket.on('newUser', pid => {
        makeCall(pid)
    })


    useEffect(() => {
        if (!user || !user.uid) return () => {
            setNavVisible(true)
            navi('/');
        }
        
        setNavVisible(false);
        
        return () => {
            setNavVisible(true)
        };
    }, [user])

    useEffect(()=>{
        return ()=>{
            peer.close()
        }
    },[])

    useEffect(() => {
        const setStreams = async () => {
            const str = await requestCamStream();
            selfCamVideoRef.current.srcObject = str;
        }
        setStreams()
    }, [])

    const toggle = () => {
        if (Style.bottom === '-20px') {
            setMyStyle({
                bottom: '-500px',
            })
        }
        else {
            setMyStyle({
                bottom: '-20px'
            })
        }
    }


    return (
        <>
            <div className="video-container">
                <div className="media-stream">

                    <a href="/">
                        <FaReply id='back-btn-vp' />
                    </a>

                    <video id='main-media-stream' ref={mainVideoRef} autoPlay playsInline />


                    <div className="self-camera">
                        <div className="camera" onClick={toggle}>
                            <video ref={selfCamVideoRef} muted onClick={() => { }} autoPlay playsInline />
                        </div>

                    </div>
                </div>

                <div className="participants" id="vc-section" style={Style} >
                    <div className="participants-container">
                        {
                            (Array.from(users)).map(str => <UserCall key={str.connectionId} call={str} />)
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default JoinCall;