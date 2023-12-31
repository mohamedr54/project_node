import * as fs from 'fs';
import {LearningFactModel} from "./learningFact.model";
import {v4 as uuid} from 'uuid';
import {openFacts} from "../helper";
import "dotenv/config"
const dbPath:string = process.env.DBPATH
const fileName:string = 'learningfact.json'
export function getAll() {
    const factBuffer: Buffer = fs.readFileSync(dbPath+'learningfact.json');
    return JSON.parse(factBuffer.toString());
}

export function createFact(fact: LearningFactModel) :void {
    if(!fact.id) {
        fact['id'] = uuid();
    }
    const facts: LearningFactModel[] = openFacts(fileName)
    facts.push(fact);
    fs.writeFileSync(dbPath+'learningfact.json', JSON.stringify(facts, null, 2));
}

export function deleteFact(id: string) {
    const facts:LearningFactModel[] = openFacts(fileName);
    const targetFact:LearningFactModel[] = facts.filter((fact:LearningFactModel) => {
        return fact.id !== id
    })
    fs.writeFileSync(dbPath+fileName, JSON.stringify(targetFact, null, 2));
}

export function updateFact(fact: LearningFactModel){
    const facts: LearningFactModel[] = openFacts(fileName);
    let updated:LearningFactModel[] = facts.map((item) => {
        return item.id === fact.id ? fact : item
    })
    fs.writeFileSync(dbPath+fileName, JSON.stringify(updated, null, 2))
}




