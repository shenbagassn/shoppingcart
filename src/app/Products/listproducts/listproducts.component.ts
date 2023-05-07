import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {

  constructor(public prodServ:ProductsService) { }

  ngOnInit(): void {
this.prodServ.getListProducts().subscribe({
  next:(data:any[])=>{
console.log(data);
  }, error:(err)=>{
console.log(err);
  },complete:()=>{
    console.log("completed");
    
  }
})
  }

}
