import { makeUppercase, replaceSpaces, limitLength } from "./stringHelpers.js";

test("test makeUppercase function", () => {
    expect(makeUppercase("html")).toEqual("HTML");
});

test("test replaceSpaces function", () => {
    expect(replaceSpaces("pussy  cat")).toMatch("pussy__cat");
});

test("test limitLength function", () => {
    const len = 4;
    expect(limitLength(4, "Theodor")).toEqual("Theo");
})