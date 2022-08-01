import React, { useContext, useEffect, useState, createRef, useRef } from 'react';
import userContext from '../UserContext';
import '../../sass/video_call.css'
import UserCall from '../userCall/UserCall';
import { FaMicrophone, FaVideo, FaReply } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
// import io from 'socket.io-client';
// import { Peer } from 'peerjs'
import { onStart, onPageChanged } from './presenter';

const users = [1, 2, 4];

// const MAIN = "main";
// const PEERS = [];


// const handleCall = (call) => {
//     call.on('stream', (stream) => {
//         // addVideo(call.connectionId, stream)
//     })
//     call.on('close', () => {
//         // removeVideo(call.connectionId)
//     })
// }

// const handleSocketConnection = (roomId, uid) => {
//     let skt = io.connect("http://localhost:3000/");
//     skt.emit("join-room", roomId, uid)
//     return skt
// }

// const makeCall = (peer, userId, stream) => {
//     const call = peer.call(userId, stream);
//     PEERS[userId] = call

//     handleCall(call)
// }

// const closeCall = (userId) => {
//     if (PEERS[userId]) {
//         PEERS[userId].close()
//         return;
//     }
//     PEERS[MAIN].close()
// }

// const handleSocket = (socket, stream) => {
//     socket.on('user-connected', userId => {
//         makeCall(userId, stream)
//     })


//     socket.on('user-disconnected', userId => {
//         closeCall(userId)
//     })
// }



// const emitUserId = (socket, roomId, id) => {
//     socket.emit("join-room", roomId, id)
// }

// const handlePeer = (peer, myStream) => {
//     peer.on('call', async (call) => {
//         // await call.answer(myStream);
//         call.answer(myStream);
//         PEERS[MAIN] = call

//         handleCall(call)
//     })

//     peer.on('open', id => {
//         // TODO: emit room id and uid
//         emitUserId(id)
//     })

// }


const askMediaStream = async () => {
    const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true
    })
    return stream;
}

const requestCamStream = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    });
    return stream;
}


const VideoCall = () => {

    const { user, setNavVisible } = useContext(userContext);

    const [mainStream, setMainStream] = useState(null);
    const [selfStream, setSelfStream] = useState(null);

    const [socket, setSocket] = useState(null);
    const [peer, setPeer] = useState(null);

    const navi = useNavigate();
    const params = useParams();

    const mainRef = createRef();
    const selfCam = createRef();

// Test
useEffect(()=>{
    const roomId = params.id;
    onStart(roomId, user.uid, mainStream, selfStream)
    return () => onPageChanged()
},[])


    useEffect(() => {
        if (!user || !user.uid) return () => {
            setNavVisible(true)
            navi('/');
        }
        setNavVisible(false);
        return () => setNavVisible(true);
    }, [user])
    

    useEffect(()=>{
        const temp = async ()=>{

            if(!mainStream){
                const tabStream = await askMediaStream();
                await setMainStream(()=>tabStream)
            }

            if(!selfStream){
                const webStream = await requestCamStream();
                await setSelfStream(()=>webStream)
            }
        }
        temp()
    },[mainStream, selfStream])

    useEffect(()=>{

        if(mainRef.current && mainStream) {
            mainRef.current.srcObject = mainStream;
        }

        if(selfCam.current && selfStream) {
            selfCam.current.srcObject = selfStream;
        }

    },[mainRef, selfCam])


    // useEffect(() => {
    //     setPeer(() => new Peer(user.uid));
    //     setSocket(() => handleSocketConnection(params.id, user.uid))

    // }, [])



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

    return (
        <>
            <div className="video-container">
                <div className="media-stream">
                        <a href="/">
                            <FaReply />
                        </a>
                    
                    <video ref={mainRef} autoPlay playsInline />


                    <div className="self-camera">

                        <div className="camera" onClick={toggle}>
                            <video ref={selfCam} muted onClick={()=>{}} autoPlay playsInline />
                        </div>

                    </div>
                </div>

                <div className="participants" style={Style} >
                    <div className="participants-container">
                        {users.map(u => <UserCall key={u} />)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoCall;