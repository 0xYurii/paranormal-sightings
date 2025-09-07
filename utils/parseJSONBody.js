

export async function parseJSONBody(req){
        let body=''
        for await (const chunks of req){
            body+=chunks
        }

    try{
        const parsedBody=JSON.parse(body)         
        return parsedBody
    }catch(err){
        throw new Error(`Invalid JSON format: ${err}`) 
    }
}