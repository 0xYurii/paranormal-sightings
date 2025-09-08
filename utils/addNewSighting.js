import fs from 'node:fs/promises'
import path from 'node:path'
import getData from "./getData.js";
import crypto from "node:crypto";

export async function addNewSighting(newSighting) {

  try {
    const dataPath=path.join("data","data.json")
    const existingData = await getData();
    const sightingWithId = {
      uuid: crypto.randomUUID(),
      ...newSighting,
    };

    existingData.push(sightingWithId); 
    const data=fs.writeFile(
        dataPath,
        JSON.stringify(existingData,null,2),
        'utf8')
  } catch (err) {
    console.log(err.message)
  }

}
