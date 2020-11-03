import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/service/products/products.service';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  //con ActivateRoute obtengo el id que nos estan enviando

  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productsService.getProduct(this.id).subscribe(product => {
        this.form.patchValue( product );
      });
    });
  }

  saveProduct(event: Event){
    event.preventDefault();
    if (this.form.valid){
      const product = this.form.value;
      this.productsService.updateProduct(this.id, product).subscribe((productUpdate) => {
        console.log(productUpdate);
        this.router.navigate(['./admin/products']);
      });
    }
  }

  private buildForm(){
    this.form = this.formBuilder.group({
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
