import React, { useContext, useEffect, useState, createRef, useRef } from 'react';
import { FaMicrophone, FaVideo, FaReply } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { Peer } from 'peerjs'
import { FaVolumeMute } from 'react-icons/fa';
import io from 'socket.io-client';
import userContext from '../UserContext';
import UserCall from '../userCall/UserCall';
import { onStart, onPageChanged } from './presenter';
import { peerOpt, socketAddress } from '../../utils/Constants';
import '../../sass/video_call.css'


const streamOpt = {
    video: true,
    audio: true
}


const VideoCall = () => {
    const { user, setNavVisible } = useContext(userContext);

    // const [mainStream, setMainStream] = useState(null);
    // const [selfStream, setSelfStream] = useState(null);

    const navi = useNavigate();
    const roomId = useParams().id;

    const mainVideoRef = useRef();
    const selfCamVideoRef = useRef();
    

    // Connection
    const socket = io(socketAddress)

    // peers user and main media
    const peerMain = new Peer(roomId, peerOpt);
    const selfPeer = new Peer(user.uid, peerOpt);


    // const [users] = useState([1,2,4,5,4]);
    const [users, setUsers] = useState(new Set());

    const addUser = (usr) => {
        setUsers(users => new Set([...users, usr]))
    }

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

    peerMain.on('call', async (call) => {
        const str = mainVideoRef.current.srcObject;
        call.answer(str);
    })

    // make call to peer -> pid
    const makeCall = async (pid) => {
        const str = selfCamVideoRef.current.srcObject;
        const call = selfPeer.call(pid, str);

        if (!call) return;

        call.on('stream', stream => {
            addUser(stream);
            // users.push(stream.clone())
        })
    }

    // emit peer id and call on new user

    selfPeer.on('open', (id) => {
        socket.emit("join-room", roomId, id)
    })

    socket.on('newUser', pid => {
        console.log('new user connected', pid);
        makeCall(pid);
    })

    useEffect(() => {
        console.log('new video elem', users)
    }, [users])

    useEffect(() => {
        if (!user || !user.uid) return () => {
            setNavVisible(true)
            navi('/');
        }
        setNavVisible(false);
        return () => setNavVisible(true);
    }, [user])

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
    let k = 0

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
                            (Array.from(users)).map(str => <UserCall key={str.id} stream={str} />)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoCall;