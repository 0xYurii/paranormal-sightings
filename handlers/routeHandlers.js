
import getData from "../utils/getData.js"
import sendResponse from "../utils/sendResponse.js"
import { parseJSONBody } from '../utils/parseJSONBody.js'
import { addNewSighting } from '../utils/addNewSighting.js'

export default async function handleGet(res){
   const content=await (getData())
   const data= JSON.stringify(content)
   sendResponse(res,200,data,'application/json')

}


export async function handlePost(req,res){
   try{
      const rawBody=await parseJSONBody(req)
      addNewSighting(rawBody)
      sendResponse(res,201,JSON.stringify(rawBody),'application/json')
   }catch(err){
      console.log(err)
      sendResponse(res, 400, JSON.stringify({error: err}), 'application/json' )
   }

}