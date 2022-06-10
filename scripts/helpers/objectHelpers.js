import { makeUppercase, replaceSpaces, limitLength } from "./stringHelpers";
export function createProduct(id, code, title) {
    return {
        id: id,
        code: makeUppercase(code),
        title: limitLength(12, replaceSpaces(title)),
    };
}
