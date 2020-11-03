import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';

import { finalize } from 'rxjs/operators';
import { ProductsService } from '@core/service/products/products.service';
import { MyValidators } from '@utils/validators';
import { Observable } from 'rxjs';
import 'firebase/storage';


@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {

  form: FormGroup;
  image$: Observable<any>;
  name: string;
  max = 10000;
  min = 1;
  cont = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  nameImg: string;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private angularFireStorage: AngularFireStorage
  ) {
    this.buildForm();
  }


  ngOnInit(): void {
  }

  saveProduct(event: Event){
    event.preventDefault();
    if (this.form.valid){
      const product = this.form.value;
      this.productsService.createProduct(product).subscribe((productNew) => {
        console.log(productNew);
        this.router.navigate(['./admin/products']);
      });
    }
  }

  uploadFile(event){
      const file = event.target.files[0];
      const name = 'images' + this.cont.toString();
      alert( name );
      const fileRef = this.angularFireStorage.ref(name);
      const task = this.angularFireStorage.upload(name, file);
      task.snapshotChanges().pipe(
        finalize(() => {
          this.image$ = fileRef.getDownloadURL();
          this.image$.subscribe(url => {
            console.log(url);
            this.form.get('image').setValue(url);
          });
        })
      ).subscribe();
    }

  private buildForm(){
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]]
    });
  }

  get priceField(){
    return this.form.get('price');
  }
}
