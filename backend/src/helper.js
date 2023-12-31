"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openFacts = void 0;
var fs = require("fs");
require("dotenv/config");
var dbPath = process.env.DBPATH;
function openFacts(fileName) {
    var factBuffer = fs.readFileSync(dbPath + fileName);
    return JSON.parse(factBuffer.toString());
}
exports.openFacts = openFacts;
//# sourceMappingURL=helper.js.map