import { CartItem } from "./cart-item";
import { Product } from "./product";

describe('CartItem', () => {
  it('should create an instance', () => {
    let product: Product = {
      description: 'test desc',
      id: 1,
      imageUrl: 'test.jpg',
      name: 'Product 1',
      price: 50
    };
    expect(new CartItem(1, product)).toBeTruthy();
  });
});
