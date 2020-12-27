import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [
    // { id: 1, productId: 1, productName: 'Test1', qty: 4, price: 100 },
    // { id: 2, productId: 2, productName: 'Test2', qty: 5, price: 50 },
    // { id: 3, productId: 3, productName: 'Test3', qty: 3, price: 150 },
    // { id: 4, productId: 4, productName: 'Test4', qty: 2, price: 250 },
  ];

  cartTotal = 0;

  constructor(private msg: MessengerService) { }

  ngOnInit() {

    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product);
    });
  }

  addProductToCart(product: Product) {

    let productExists = false;

    for (let item in this.cartItems) {
      if (this.cartItems[item].productId === product.id) {
        this.cartItems[item].qty++;
        productExists = true;
        break;
      }
    }

    if (!productExists) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      });
    }
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price);
    });
  }
}

export interface CartItem {
  productId: number;
  productName: string;
  qty: number;
  price: number;
}