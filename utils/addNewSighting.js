import fs from 'node:fs/promises'
import path from 'node:path'
import getData from "./getData.js";

export async function addNewSighting(newSighting) {

  try {
/*
    1. Get the existing data (remember, this will already be a JS array)
    2. Push the new sighting to it (we parsed it to a JS object in the last scrim)
    3. Write data to the file.
    4. Add the new sighting and check out the 'read' page.
    5. Throw an error (in the catch block) if any of 1-3 above fail.
    
    To write data:
    Import fs/promises
    Use the writeFile method with the following:
      - the relative path to the file 
      - The data (what should we do to this data first?)
      - The encoding 'utf8'
    
    Bonus: figure out how to prettify the JSON!
*/
    const dataPath=path.join("data","data.json")
    const existingData = await getData();
    existingData.push(newSighting);
    const data=fs.writeFile(
        dataPath,
        JSON.stringify(existingData,null,2),
        'utf8')
  } catch (err) {
    console.log(err.message)
  }

}
