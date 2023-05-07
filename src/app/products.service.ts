import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http:HttpClient) { }

  getListProducts(){
   return this.http.get<any[]>("https://credo-shoppingcartv5.herokuapp.com/listproducts");//<> using generic method mention expected data type & returning observable data
  }
}
