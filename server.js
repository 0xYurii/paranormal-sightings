import http from 'node:http'
import serverStatic from "./utils/serverStatic.js"
const PORT = 8000


const __dirname=import.meta.dirname
console.log(__dirname)


const server = http.createServer((req, res) => {


    console.log(serverStatic(__dirname))

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<html><h1>The server is working</h1></html>')
})

server.listen(PORT, ()=> console.log(`Connected on port: ${PORT}`))
