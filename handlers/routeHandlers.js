
import getData from "../utils/getData.js"
import sendResponse from "../utils/sendResponse.js"
import { parseJSONBody } from '../utils/parseJSONBody.js'
import { addNewSighting } from '../utils/addNewSighting.js'
import { sanitizeInput } from '../utils/sanitizeInput.js'
import { sightingEvents } from "../events/sightingEvent.js"
import {stories} from "../data/stories.js"


export  async function handleGet(res){
   const content=await (getData())
   const data= JSON.stringify(content)
   sendResponse(res,200,data,'application/json')

}



export async function handlePost(req,res){
   try{
      const parsedBody=await parseJSONBody(req)
      const sanitizedBody = sanitizeInput(parsedBody)
      addNewSighting(sanitizedBody)
      sightingEvents.emit('sighting-added',sanitizedBody)




      sendResponse(res,201,JSON.stringify(sanitizedBody),'application/json')
   }catch(err){
      console.log(err)
      sendResponse(res, 400, JSON.stringify({error: err}), 'application/json' )
   }

}


export async function handleNews(req, res) {
  res.statusCode = 200

   res.setHeader("Content-Type","text/event-stream")
   res.setHeader("Cache-Control","no-cache")
   res.setHeader("Connection",'keep-alive')
   setInterval(() => {
    let randomIndex = Math.floor(Math.random() * stories.length)
 
   res.write(
      `data: ${JSON.stringify({
         event:'news-update',
         story:stories[randomIndex]
      })}\n\n`
   )

  }, 3000) 

}
