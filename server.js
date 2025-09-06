import http from "node:http"
import path from "node:path"
const __dirname=import.meta.dirname

const PORT =8000
console.log(__dirname)

const server=http.createServer((req,res)=>{

    const pathToResources=path.join(__dirname,"public","index.html")
    console.log(pathToResources)
    res.writeHead(200,{"Content-Type":"text/html"})
    
    res.end(`<html><h1>The server is working!!</h1></html>`)
})


server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))

