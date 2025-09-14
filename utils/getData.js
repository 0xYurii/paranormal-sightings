import path from 'node:path'
import fs from 'node:fs/promises'

export default async function getData() {
    // This path is correct, the problem was the file was missing on the server.
    const dataPath = path.join(process.cwd(), 'data', 'data.json');
    
    try {
        const content = await fs.readFile(dataPath, "utf8")
        const parseData = JSON.parse(content)
        return parseData
    } catch(err) {
        console.log("Error reading data.json:", err.message)
        return []
    }
}