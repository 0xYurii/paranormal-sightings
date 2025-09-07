import path from 'node:path'
import fs from 'node:fs/promises'

export default async function getData() {
    const dataPath = path.join("data", "data.json")
    

    
    try {
        const content = await fs.readFile(dataPath, "utf8")
        console.log("File read successfully!")
        const parseData = JSON.parse(content)
        return parseData
    } catch(err) {
        console.log("Error occurred:", err.message)
        console.log("Full error:", err)
        return []
    }
}