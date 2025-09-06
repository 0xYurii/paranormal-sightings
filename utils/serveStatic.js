import path from 'node:path'
import fs from 'node:fs/promises'
import sendResponse from './sendResponse.js'

export default async function serveStatic(baseDir,res) {
  
  const filePath = path.join(baseDir, 'public', 'index.html')
  
  try{
    const content=await fs.readFile(filePath)
    sendResponse(res,200,content,'text/html')
  }catch(error){
    console.log("Failed read the file ",error.message)
    sendResponse(res,500,"Failed read the file ",'text/plain')
  }



}
