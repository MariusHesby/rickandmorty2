"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.limitLength = exports.replaceSpaces = exports.makeUppercase = void 0;
function makeUppercase(str) {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
    return str.toUpperCase();
}
exports.makeUppercase = makeUppercase;
function replaceSpaces(str) {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
    return str.replace(/\s/g, "_");
}
exports.replaceSpaces = replaceSpaces;
function limitLength(len, str) {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
    return str.substr(0, len);
}
exports.limitLength = limitLength;
