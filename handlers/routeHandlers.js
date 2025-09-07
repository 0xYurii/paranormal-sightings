import { escape } from "node:querystring"
import getData from "../utils/getData.js"
import sendResponse from "../utils/sendResponse.js"


export default async function handleGet(res){
   const content=await (getData())
   const data= JSON.stringify(content)
   sendResponse(res,200,data,'application/json')

}
// handlePost

// parseJSONBody() will collect and parse the incoming JSON
// santizeData() 
// addNewSighting() will do the donkey work of adding the data to our dataset
// sendResponse()

/*
Challenge:
  1. Create and export a function called handlePost().
  2. For now, that function can just log 'POST request received'.
*/

export async function handlePost(req,res){
   console.log('POST request received')
}