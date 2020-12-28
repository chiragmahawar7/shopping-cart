import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { wishlistUrl } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  getWishlist() {
    return this.http.get<any[]>(wishlistUrl).pipe(
      map((result: any[]) => {
        let productIds: number[] = [];
        result.forEach(item => productIds.push(item.id));
        return productIds;
      })
    )
  }

  addToWishlist(productId: number) {
    return this.http.post(wishlistUrl, { id: productId });
  }

  removeFromWishlist(productId: number) {
    return this.http.delete(wishlistUrl + '/' + productId);
  }
}