import { Component, OnInit } from '@angular/core';
import { Product } from '@core/models/product.model';
import { ProductsService } from '@core/service/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.scss']
})


// tslint:disable-next-line: component-class-suffix
export class ProductsContainer implements OnInit {

  products: Product[] = [];

  constructor( private productsService: ProductsService ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

  fetchProducts(){
    //this.products = this.productsService.getAllProducts().subscribe(products => { console.log(products); });
    this.productsService.getAllProducts().subscribe(products => { this.products = products; });
  }
}


