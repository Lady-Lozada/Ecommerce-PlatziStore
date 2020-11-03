/* Un decorador es la manera en que Angular puede saber que tipo de error va a cumplir la clase
    (componente, servicio,...) */
import { Component, Input, Output, EventEmitter, OnInit, OnDestroy} from '@angular/core';

import { Product } from '@core/models/product.model';

import { CartService } from '@core/service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  @Input() product: Product;
  //Los EventEmmiter's pueden emitir un evento con un argumento que será recibido por el padre.
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor(private cartService: CartService){ // Crea el componente y lo pone en interfaz
    console.log('1. constructor');
  }

  ngOnInit(){
    console.log('3. ngOnInit');
  }

  ngOnDestroy(){ // Remueve o elimina bucles de memoria
    console.log('5. ngOnDestroy');
  }

  addCart() {
    console.log('Añadir al carrito');
    this.cartService.addCart(this.product);
    // this.productClicked.emit(this.product.id);
  }
}
