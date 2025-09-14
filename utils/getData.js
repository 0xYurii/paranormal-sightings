import path from 'node:path'
import fs from 'node:fs/promises'

export default async function getData() {
    const __dirname = import.meta.dirname;
    const dataPath = path.join(__dirname, '..', 'data', 'data.json');
    

    
    try {
        const content = await fs.readFile(dataPath, "utf8")
        const parseData = JSON.parse(content)
        return parseData
    } catch(err) {
        console.log("Error occurred:", err.message)
        console.log("Full error:", err)
        return []
    }
}