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
    console.log("Failed read the file ",error.message)
    sendResponse(res,500,"Failed read the file ",'text/plain')
  }



}
