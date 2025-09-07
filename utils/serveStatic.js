import path from 'node:path'
import fs from 'node:fs/promises'
import sendResponse from './sendResponse.js'
import getContentType from './getContentType.js'


export default async function serveStatic(baseDir,res,req) {
  const publicDir=path.join(baseDir, 'public', )
  const filePath = path.join(publicDir,req.url==="/"?
    "index.html":
    req.url
  )
  const ext=path.extname(filePath)
  const content_type=getContentType(ext)


  try{
    const content=await fs.readFile(filePath)
    sendResponse(res,200,content,content_type)
  }catch(error){
    console.log("Failed read the file ",error.code)
    if(error.code === 'ENOENT'){
      
      const path404=path.join(publicDir,"404.html")
      const content404=await fs.readFile(path404)

      sendResponse(res,404,content404,"text/html")

    }else{
      sendResponse(res,500,`<html><h1>Server Error: ${err.code}</h1></html>`,'text/html')
    } 
  }
}
