import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { MaterialModule } from './../material/material.module';
import { NavComponent } from './components/nav/nav.component';

import { ProductsListComponent } from './components/products-list/products-list.component';
import { TableComponent } from './components/table/table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsFormComponent } from './components/products-form/products-form.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

// Este modulo será usado para los esquemas de angular material
@NgModule({
  declarations: [ProductFormComponent, NavComponent, ProductsListComponent, TableComponent, DashboardComponent, ProductsFormComponent, ProductEditComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AdminModule { }
