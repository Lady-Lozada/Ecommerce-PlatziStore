import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '@core/service/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private authService: AuthService
  ) {

    this.buildForm(); }

  ngOnInit(): void {
  }

  register(event: Event){
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.authService.createUser(value.email, value.password)
      .then(() => {
        this.route.navigate(['/auth/login']);
      })
    }
    console.log(this.form.value);
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      // id: ['', [Validators.required]],
      email: ['', Validators.compose([Validators.required])],
      // firstName: ['', [Validators.required]],
      // lastName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

}
