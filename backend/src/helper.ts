import * as fs from "fs";
import 'dotenv/config'
const dbPath:string = process.env.DBPATH;
export function openFacts(fileName: string): any {
    const factBuffer: Buffer = fs.readFileSync(dbPath+fileName);
    return JSON.parse(factBuffer.toString());
}



