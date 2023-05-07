import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( public http:HttpClient)// inbuilt angular service- for AJAX call
   { }

  registration(formdata:any){
    console.log( formdata);

    
  }
}
