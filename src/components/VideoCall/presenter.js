import io from 'socket.io-client';
import Peer from 'peerjs';

const URL = "https://my-vc-app-nodejs.herokuapp.com/";
const PEERS = []
const MAIN = "MAIN";
let socket = io(URL)
let mainPeer;
let camPeerMain;
let mainStream;
let camStream;

const emitUserId = (socket, roomId, uid) => {
    socket.emit("join-room", roomId, uid)
}

const addVideo = (callId, stream) => { }
const removeVideo = (callId, stream) => { }

const onStart = (roomId, uid, mediaStream, camStream) => {
    mainStream = mediaStream;
    camStream = camStream;
    
    mainPeer = new Peer(roomId);
    camPeerMain = new Peer(uid);

    emitUserId(socket, roomId, uid);
    handleSocket(socket);
}


const onPageChanged = () => {
    console.log('end')
}


const handleCall = (call) => {
    call.on('stream', stream => {
        addVideo(call.connectionId, stream)
    })

    call.on('close', () => {
        removeVideo(call.connectionId)
    })
}


const handlePeer = (peer, stream) => {
    peer.on('call', async (call) => {
        // await call.answer(myStream);
        call.answer(stream);
        PEERS[MAIN] = call

        handleCall(call)
    })

    peer.on('open', id => {
        // TODO: emit room id and uid
        emitUserId(id)
    })

}



const makeCall = (userId, stream, peer) => {
    const call = peer.call(userId, stream);
    PEERS[userId] = call

    handleCall(call)
}

const closeCall = (userId) => {
    if (PEERS[userId]) {
        PEERS[userId].close()
        return;
    }
    PEERS[MAIN].close()
}

const handleSocket = (socket) => {
     socket.on('user-connected', userId => {
        // make call for media stream and vc
        console.log(userId)
        // makeCall(userId, )
    })

    socket.on('test', data => console.log(data))

    socket.on('user-disconnected', userId => {
        console.log(userId)
        // closeCall(userId)
    })

}

export { onStart, onPageChanged };