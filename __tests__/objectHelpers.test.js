import { createProduct } from "../scripts/helpers/objectHelpers.js";

test("test createProduct function", () => {
    expect(createProduct(30, "g h j", "this is the summer of 69")).toEqual({ id: 30, code: "G H J", title: "this_is_the_" });

});