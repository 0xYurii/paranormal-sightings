

import path from "node:path";

export default function serverStatic(baseDir){
    const filePath=path.join(baseDir,"public","index.html")
    return filePath
}