import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '@core/service/auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private authService: AuthService
  ) {

    this.buildForm(); }

  ngOnInit(): void {
  }

  login(event: Event){
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.authService.loginUser(value.email, value.password)
      .then(() => {
        this.route.navigate(['/admin']);
      }).catch(() => {
        alert('No es válido');
      });
    }
    //console.log(this.form.value);
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}
