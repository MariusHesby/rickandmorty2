import { createProduct, Product } from './helpers/objectHelpers.js';

const newProduct: Product = createProduct(
  12,
  'd f g',
  'This is the title of the product, it will be truncated'
);
console.log(newProduct);