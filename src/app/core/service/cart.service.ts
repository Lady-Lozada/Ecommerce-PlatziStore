import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '@core/models/product.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  // Variable de tipo observable para que cualquiera se subscriba a el
  cart$ = this.cart.asObservable();

  constructor() { }

  addCart(product: Product){
    // No queremos errores de mutabilidad para adicionar al carrito ...this.products,
    this.products = [...this.products, product];
    this.cart.next(this.products); //Informa que algo se agrego al carrito, aqui se envia una copia del array creado
  }

  deleteCart(product: Product){
    //this.prod.unsubscribe(product);
    //return this.http.delete(`${environment.url_api}/products/${id}`);
  }
}
