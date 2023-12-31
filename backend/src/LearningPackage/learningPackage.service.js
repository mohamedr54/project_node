"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSummary = exports.updateLp = exports.deleteLp = exports.createLp = exports.getAll = void 0;
var fs = require("fs");
var uuid_1 = require("uuid");
var helper_1 = require("../helper");
var dbPath = process.env.DBPATH;
var fileName = 'learningPackage.json';
function getAll() {
    var factBuffer = fs.readFileSync(dbPath + fileName);
    return JSON.parse(factBuffer.toString());
}
exports.getAll = getAll;
function createLp(lp) {
    if (!lp.id) {
        lp['id'] = (0, uuid_1.v4)();
    }
    var lps = (0, helper_1.openFacts)(fileName);
    lps.push(lp);
    fs.writeFileSync(dbPath + fileName, JSON.stringify(lps, null, 2));
}
exports.createLp = createLp;
function deleteLp(id) {
    var facts = (0, helper_1.openFacts)(fileName);
    var targetFact = facts.filter(function (lp) {
        return lp.id !== id;
    });
    fs.writeFileSync(dbPath + fileName, JSON.stringify(targetFact, null, 2));
}
exports.deleteLp = deleteLp;
function updateLp(lp) {
    var facts = (0, helper_1.openFacts)(fileName);
    var updated = facts.map(function (item) {
        return item.id === lp.id ? lp : item;
    });
    fs.writeFileSync(dbPath + fileName, JSON.stringify(updated, null, 2));
}
exports.updateLp = updateLp;
function getSummary(title) {
    var lp = (0, helper_1.openFacts)(fileName);
    if (title !== '') {
        var filteredLp = lp.filter(function (item) {
            return item.title === title.toLowerCase();
        });
        return filteredLp.map(function (item) {
            return { id: item.id, title: item.title };
        });
    }
    else {
        return lp.map(function (item) {
            return { id: item.id, title: item.title };
        });
    }
}
exports.getSummary = getSummary;
//# sourceMappingURL=learningPackage.service.js.map