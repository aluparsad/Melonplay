import React, { useContext, useEffect, useState, useRef } from 'react';
import { FaReply } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { Peer } from 'peerjs'
import io from 'socket.io-client';
import userContext from '../UserContext';
import UserCall from '../userCall/UserCall';
import { socketAddress } from '../../utils/Constants';
import '../../sass/video_call.css'


const streamOpt = {
    video: true,
    audio: true
}


const VideoCall = () => {
    const { user, setNavVisible } = useContext(userContext);

    const [Style, setMyStyle] = useState({
        bottom: '-20px'
    })

    const navi = useNavigate();
    const roomId = useParams().id;

    const mainVideoRef = useRef();
    const selfCamVideoRef = useRef();

   
    // Connection
    const socket = io(socketAddress)

    // peers user and main media
    const peerMain = new Peer(roomId);
    const selfPeer = new Peer(user.uid);

    // const [users] = useState([1,2,4,5,4]);
    const [users, setUsers] = useState(new Set());

    const addCall = (call) => {
        setUsers(users => new Set([...users, call]))
    }

    const removeUser = (usr) => {
        setUsers(users => {
            const temp = users;
            temp.delete(usr);
            return new Set([...temp]);
        })
    }


    // Media Streams
    useEffect(() => {
        navigator
            .mediaDevices
            .getUserMedia(streamOpt)
            .then(str => {
                selfCamVideoRef.current.srcObject = str
            })

        navigator
            .mediaDevices
            .getDisplayMedia(streamOpt)
            .then(str => { mainVideoRef.current.srcObject = str })
    }, [])

    // Peer On Call
    peerMain.on('call', async (call) => {
        const str = mainVideoRef.current.srcObject;
        call.answer(str.clone());
    })

    // make call to peer -> pid
    const makeCall = async (pid) => {
        const str = await navigator.mediaDevices.getUserMedia(streamOpt);
        const call = selfPeer.call(pid, str);
        
        if (!call) return;
        
        addCall(call);
    }

    // emit peer id and call on new user

    selfPeer.on('open', (id) => {
        socket.emit("join-room", roomId, id)
    })

    socket.on('newUser', pid => {
        // console.log('new user connected', pid);
        makeCall(pid);
    })

    useEffect(() => {
        if (!user || !user.uid) return () => {
            setNavVisible(true)
            navi('/');
        }
        setNavVisible(false);
        return () => setNavVisible(true);
    }, [user])



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
    )
}

export default VideoCall;