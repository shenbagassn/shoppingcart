import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  registration(formdata:any){
    console.log( formdata);
    
  }
}
