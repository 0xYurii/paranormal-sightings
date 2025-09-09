import http from 'node:http'
import  serveStatic  from './utils/serveStatic.js'
import { handleGet, handlePost, handleNews } from './handlers/routeHandlers.js'

const PORT = 8000

const __dirname = import.meta.dirname

const server = http.createServer(async(req, res) => {

    if(req.method==="GET" && req.url==='/api'){
        await handleGet(res)

    
        
    }else if(!req.url.startsWith("/api")){
        return await serveStatic(__dirname,res,req)

    }else if(req.method==="POST"&& req.url==='/api'){
        await handlePost(req,res)
    }else if (req.url==="/api/news"){
        return await handleNews(req,res)
    }

    
})

server.listen(PORT, ()=> console.log(`Connected on port: ${PORT}`))
