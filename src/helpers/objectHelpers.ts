import { makeUppercase, replaceSpaces, limitLength } from './stringHelpers.js';

export interface Product {
  id: number;
  code: string;
  title: string;
}

export function createProduct(
  id: number,
  code: string,
  title: string
): Product {
  return {
    id: id,
    code: makeUppercase(code),
    title: limitLength(12, replaceSpaces(title)),
  };
}
