import type {Order, Product} from "api"

export function sumProductsPrice (value: Array<Product>) {
    return value.reduce((counter, value) => counter + value.price, 0);
}
  
export function allProductsPrice (value: Array<Order>) {
  return value.reduce(
    (counter, value) => counter + sumProductsPrice(value.products),
    0
  );
}

export function allProductsCount (value: Array<Order>) {
  return value.reduce((counter, value) => counter + value.products.length, 0);
}
  