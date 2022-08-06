import React, { useContext, useEffect, useState, createRef, useRef } from 'react';
import userContext from '../../UserContext';
import UserCall from '../../userCall/UserCall';
import { FaReply } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import io from 'socket.io-client';
import { Peer } from 'peerjs'
import '../../../sass/video_call.css';
import { socketAddress, peerOpt } from '../../../utils/Constants';



const requestCamStream = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    });
    return stream;
}


const JoinCall = () => {
    const { user, setNavVisible } = useContext(userContext);
    
    const navi = useNavigate();
    const roomId = useParams().id;
    
    const mainVideoRef = useRef();
    const selfCamVideoRef = useRef();
    
    // Connection
    const socket = io(socketAddress);
    const peer = new Peer(user.uid);
    
    const [users, setUsers] = useState([])
    const [mainStream, setMainStream] = useState(null);
    const [selfStream, setSelfStream] = useState(null);

    const callMainPeer = async () => {
        const str = await requestCamStream();
        const call = peer.call(roomId, str);
        console.log('mainCall', call)

        call.on('stream', stream=>{
            console.log('main str', stream);
            setMainStream(()=>stream);
            mainVideoRef.current.srcObject = stream;
        })
    }


    const makeCall = (peerId) => {
        const call = peer.call(peerId, selfStream);
        console.log('call2', call);
        call.on('stream', stream=>{
            const view = <UserCall stream/>
            users.push(view)
        })
    }

    peer.on('call', async(call) => {
        const str  = await requestCamStream();
        call.answer(str.clone());
        
        console.log('call1', call)

        call.on('stream', stream=>{
            const view = <UserCall stream/>
            users.push(view)
        })
    })


    peer.on('open',(id)=>{
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
        return () => setNavVisible(true);
    }, [user])

    useEffect(() => {
        const setStreams = async () => {
            if (!selfStream) {
                const str = await requestCamStream();
                setSelfStream(str)
                selfCamVideoRef.current.srcObject = str;
            }
        }
        setStreams()
    }, [mainStream, selfStream])

    

    const [Style, setMyStyle] = useState({
        bottom: '-20px'
    })

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
    const k = 0;
    return (
        <>
            <div className="video-container">
                <div className="media-stream">
                    <a href="/">
                        <FaReply />
                    </a>

                    <video ref={mainVideoRef} autoPlay playsInline />


                    <div className="self-camera">

                        <div className="camera" onClick={toggle}>
                            <video ref={selfCamVideoRef} muted onClick={() => { }} autoPlay playsInline />
                        </div>

                    </div>
                </div>

                <div className="participants" style={Style} >
                    <div className="participants-container">
                        {/* {users.map(u => <UserCall key={k++} />)} */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default JoinCall;