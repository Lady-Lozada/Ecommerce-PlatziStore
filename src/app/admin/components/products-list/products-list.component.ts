import { Component, OnInit } from '@angular/core';

import { ProductsService } from '@core/service/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    public productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(){
    this.productsService.getAllProducts().subscribe(products =>
      {this.products = products;
      });
  }

  deleteProduct(id: string){
    this.productsService.deleteProduct(id).subscribe(
      respuesta => {
          console.log(respuesta);
          //this.fetchProducts();
          if (respuesta) {
            const index = this.products.indexOf(id);
            if (index > -1) {
              this.products.splice(index, 1);
            }
            console.log(this.products);
            this.fetchProducts();
            window.alert('Eliminado');
          }
      });
  }
}
