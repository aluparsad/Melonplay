const baseUrl = "https://melonplay.herokuapp.com/"
// const baseUrl = "localhost"
const PORT = '22145'
// const PORT = '3001'
const socketAddress = `${baseUrl}`


const peerOpt = {
    host:baseUrl,
    port:PORT
}

export{baseUrl, socketAddress, peerOpt}