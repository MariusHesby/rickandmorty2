"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = void 0;
const stringHelpers_js_1 = require("./stringHelpers.js");

function createProduct(id, code, title) {
    return {
        id: id,
        code: (0, stringHelpers_js_1.makeUppercase)(code),
        title: (0, stringHelpers_js_1.limitLength)(12, (0, stringHelpers_js_1.replaceSpaces)(title)),
    };
}
exports.createProduct = createProduct;