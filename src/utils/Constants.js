// const baseUrl = "https://melonplay.herokuapp.com/"
const baseUrl = "localhost"
const PORT = '3001'
// const socketAddress = `${baseUrl}`
const socketAddress = `${baseUrl}:${PORT}`

const peerOpt = {
    host:baseUrl,
    path:'/peer',
    port:'3002'
}

export{baseUrl, socketAddress, peerOpt}