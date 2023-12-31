import * as fs from 'fs';
import {v4 as uuid} from 'uuid'
import {openFacts} from "../helper";
import {LearningPackageModel} from "./learningPackage.model";

const dbPath: string = process.env.DBPATH
const fileName: string = 'learningPackage.json'


export function getAll() {
    const factBuffer: Buffer = fs.readFileSync(dbPath + fileName);
    return JSON.parse(factBuffer.toString());
}

export function createLp(lp: LearningPackageModel): void {
    if (!lp.id) {
        lp['id'] = uuid()
    }
    const lps: LearningPackageModel[] = openFacts(fileName);
    lps.push(lp);
    fs.writeFileSync(dbPath + fileName, JSON.stringify(lps, null, 2));
}

export function deleteLp(id: string): void {
    const facts: LearningPackageModel[] = openFacts(fileName);
    const targetFact: LearningPackageModel[] = facts.filter((lp: LearningPackageModel): boolean => {
        return lp.id !== id
    })
    fs.writeFileSync(dbPath + fileName, JSON.stringify(targetFact, null, 2));
}

export function updateLp(lp: LearningPackageModel): void {
    const facts: LearningPackageModel[] = openFacts(fileName);
    let updated: LearningPackageModel[] = facts.map((item: LearningPackageModel): LearningPackageModel => {
        return item.id === lp.id ? lp : item
    })
    fs.writeFileSync(dbPath + fileName, JSON.stringify(updated, null, 2))
}

export function getSummary(title: any) {
    const lp: LearningPackageModel[] = openFacts(fileName);
    if (title !== '') {
        const filteredLp: LearningPackageModel[] = lp.filter((item: LearningPackageModel): boolean => {
            return item.title === title.toLowerCase();
        })
        return filteredLp.map((item: LearningPackageModel): { id: string, title: string } => {
            return {id: item.id, title: item.title}
        })
    } else {
        return lp.map((item: LearningPackageModel): { id: string, title: string } => {
            return {id: item.id, title: item.title}
        })
    }

}














