import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
import { Product } from '@core/models/product.model';
// import { ProductCart } from '@core/models/productcart.model';
import { CartService } from '@core/service/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$: Observable<Product[]>;
  //productCart$: ProductCart[] = ['title', 'price', 'quantity', 'total'];


  constructor(
    private cartService: CartService,
  ) {
    this.products$ = this.cartService.cart$;
   }

  ngOnInit(): void {
    //this.products$ = this.getProductCart();
  }
  addProduct(product: Product) {
    this.cartService.addCart(product);
  }
/*
  getProductCart(){
    return this.cartService.cart$.pipe(
      map(products =>
        {
          let count = 0;
          const productList = products
          .sort( ( a, b ) => { // Ordenar productos para tener los id acomodados.
            return parseInt(a.id, 10) > parseInt(b.id, 10) ? 1 : -1;
          })
          .reduce((acc, product, productIndex) => { // Agrupar productos por id.
            // Si el objeto no fue previamente guardado crea uno nuevo.
            if ( !products.slice(0, productIndex).some( (p: Product) => p.id === product.id) ) {
              acc[count] = {
                id: product.id,
                title: product.title,
                image: product.image,
                price: product.price,
                description: product.description,
                quantity: 1,
                total: product.price
              };
              count++;
            }
            // Si existe mas de un producto registrado incrementa su total y cantidad.
            else{
              const index = acc.findIndex(pc => pc.id === product.id);
              if (index !== -1) {
                acc[index].quantity += 1 ;
                acc[index].total += product.price;
              }
            }
            return acc;
          }, [] );
          console.log(productList);
          return productList;
      })
      );
  }*/
  /*
  deleteProduct(product: Product) {
    this.cartService.deleteCart(product);
  }*/

}
