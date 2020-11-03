import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductsService } from '@core/service/products/products.service';
import { Product } from '@core/models/product.model';
import { Observable } from 'rxjs';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.product$ = this.route.params
    .pipe(
      switchMap((params: Params) => {
        return  this.productsService.getProduct(params.id);
      })
    );
  }
/*
  fetchProduct(id: string){
    this.productsService.getProduct(id).subscribe( product => {
      this.product = product;
    });
  }*/

  createProduct(){
    const newProduct: Product = {
      id: '224',
      title: 'nuevo desde angular',
      image: 'assets\images\banner-1.jpg',
      price: 25000,
      description: 'hola'
    };
    this.productsService.createProduct(newProduct).subscribe( product => {
      console.log(product);
    });
  }

  updateProduct(){
    const updateProduct: Partial<Product> = {
      id: '224',
      title: 'nuevo desde angular',
      image: 'assets\images\banner-1.jpg',
      price: 15000,
      description: 'Edicion titulo'
    };
    this.productsService.updateProduct('224', updateProduct).subscribe( product => {
      console.log(product);
    });
  }

  deleteProduct(id: string){
    this.productsService.deleteProduct('21').subscribe( respuesta => {
      console.log(respuesta);
    });
  }

  getRandomUsers(){
    this.productsService.getRandomUsers()
    .subscribe(users => { // Acá todo sale bien
      console.log(users);
    }, // Acá se maneja si hay algún error
      error => {
        console.error(error);
      }
    );
  }

  getFile() {
    this.productsService.getFile()
    .subscribe(content => { // Acá se recibe el contenido del archivo
      console.log(content);
      const blob = new Blob([content], {type: 'text/plain;charset=utf-8'});
      FileSaver.saveAs(blob, 'hello world.txt');
    });
  }
}
