import getData from "../utils/getData.js"
import sendResponse from "../utils/sendResponse.js"


export default async function handleGet(res){
   const content=await (getData())
   const data= JSON.stringify(content)
   sendResponse(res,200,data,'application/json')

}