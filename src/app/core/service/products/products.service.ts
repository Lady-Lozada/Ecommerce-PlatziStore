import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Product } from '@core/models/product.model';
import { environment } from '@environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

import { AngularFireStorage } from '@angular/fire/storage';
import * as Sentry from '@sentry/angular';


interface User{
  email: string;
  gender: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  /*private postsCollection: AngularFirestoreCollection<Product>;
  private downloadURL: Observable<string>;
  private filePath: any;*/
/* products: Product[] = [
    {id: '1', image: 'assets/camiseta.png', title: 'Camiseta', price: 80000, description: 'bla bla bla bla bla' },
    {id: '2', image: 'assets/hoodie.png', title: 'Hoodie', price: 80000, description: 'bla bla bla bla bla' },
    {id: '3', image: 'assets/mug.png', title: 'Mug', price: 80000, description: 'bla bla bla bla bla' },
    {id: '4', image: 'assets/pin.png', title: 'Pin', price: 80000, description: 'bla bla bla bla bla' },
    { id: '5', image: 'assets/stickers1.png', title: 'Stickers 1', price: 80000, description: 'bla bla bla bla bla'},
    {id: '6', image: 'assets/stickers2.png', title: 'Stickers 2', price: 80000, description: 'bla bla bla bla bla'}];
*/
  constructor(
    private http: HttpClient,
    private storage: AngularFireStorage
  ) { }

  /**
   * Lista todos los productos de nuestra API
   */
  getAllProducts(): Observable<Product[]>{
    // return this.products;
    return this.http.get<Product[]>(`${environment.url_api}/products/`);
  }

  /**
   * Busca un producto según su id
   * @param id Identificador del producto a buscar
   */
  getProduct(id: string): Observable<Product>{
    // return this.products.find(item => id === item.id);
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }
  /**
   * Crea un nuevo producto
   * @param product => Producto a ser creado
   */
  createProduct(product: Product){

    return this.http.post(`${environment.url_api}/products/`, product);
  }

  /**
   * Actualiza un nuevo producto
   * @param id => Producto a ser actualizado
   * changes: Partial<Product> => Recibe parte del producto a actualizar
   */
  updateProduct(id: string, changes: Partial<Product>){
    return this.http.put(`${environment.url_api}/products/${id}`, changes)
    ;
  }

  /**
   * Elimina un producto según su id
   * @param id Identificador del producto a borrar
   */
  deleteProduct(id: string){
    return this.http.delete(`${environment.url_api}/products/${id}`);
    /*.pipe(
      catchError(this.handleError),
    );*/
  }

  /**
   * Conexion a otra API para hacer un reques a esta petición
   */
  getRandomUsers(): Observable<User[]>{
    return this.http.get('https://randomuser.me/api/?results')
    .pipe(
      retry(3), // Se realiza 3 veces el reintento de una petición
      catchError(this.handleError),
      map((response: any) => response.results as User[])
    );
  }

  getFile(){
    return this.http.get('@assets/files/test.txt', {responseType: 'text'});
  }

  private handleError(error: HttpErrorResponse){
    console.log(error);
    Sentry.captureException(error);
    return throwError('ups algo salio mal');
  }
}
