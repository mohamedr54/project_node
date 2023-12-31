"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFact = exports.deleteFact = exports.createFact = exports.getAll = void 0;
var fs = require("fs");
var uuid_1 = require("uuid");
var helper_1 = require("../helper");
require("dotenv/config");
var dbPath = process.env.DBPATH;
var fileName = 'learningfact.json';
function getAll() {
    var factBuffer = fs.readFileSync(dbPath + 'learningfact.json');
    return JSON.parse(factBuffer.toString());
}
exports.getAll = getAll;
function createFact(fact) {
    if (!fact.id) {
        fact['id'] = (0, uuid_1.v4)();
    }
    var facts = (0, helper_1.openFacts)(fileName);
    facts.push(fact);
    fs.writeFileSync(dbPath + 'learningfact.json', JSON.stringify(facts, null, 2));
}
exports.createFact = createFact;
function deleteFact(id) {
    var facts = (0, helper_1.openFacts)(fileName);
    var targetFact = facts.filter(function (fact) {
        return fact.id !== id;
    });
    fs.writeFileSync(dbPath + fileName, JSON.stringify(targetFact, null, 2));
}
exports.deleteFact = deleteFact;
function updateFact(fact) {
    var facts = (0, helper_1.openFacts)(fileName);
    var updated = facts.map(function (item) {
        return item.id === fact.id ? fact : item;
    });
    fs.writeFileSync(dbPath + fileName, JSON.stringify(updated, null, 2));
}
exports.updateFact = updateFact;
//# sourceMappingURL=learningFact.service.js.map