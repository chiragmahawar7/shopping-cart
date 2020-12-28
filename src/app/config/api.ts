import { environment } from 'src/environments/environment';

// If Production Environment, redirect to backend api; else redirect to local json-server
export const baseUrl = environment.production ? 'https://cm.shopping.com' : 'http://localhost:3000';

export const productsUrl = baseUrl + '/products';
export const cartUrl = baseUrl + '/cart';
export const wishlistUrl = baseUrl + '/wishlist';