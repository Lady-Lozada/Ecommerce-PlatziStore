import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsFormComponent } from './components/products-form/products-form.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { TableComponent } from './components/table/table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: NavComponent, children: [
    { path: 'create', component: ProductFormComponent},
    { path: '', component: DashboardComponent},
    { path: 'table', component: TableComponent},
    { path: 'products', component: ProductsListComponent},
    { path: 'products/create', component: ProductsFormComponent},
    { path: 'products/edit/:id', component: ProductEditComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
