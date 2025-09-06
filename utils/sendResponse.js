export default function sendResponse(res,statusCode,content,content_type){
    
    res.statusCode=statusCode
    res.setHeader('Content-Type',content_type)
    res.end(content)
}   