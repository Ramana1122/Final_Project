import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/types';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  products:product[]=[];
  type:string[]=[
    "All",
    "Dairy products",
    "Fats, Oils, Shortenings",
    "Vegetables A-E",
    "Vegetables F-P",
    "Vegetables R-Z",
    "Meat, Poultry",
    "Fish, Seaname",
    "Fruits A-F"
  ]
  selected:string="All";
  select:string="All";
  product:any;
  searchText: string = '';

  constructor(private ps:ProductService) { }

  ngOnInit(): void {
    this.ps.getProducts().subscribe( {
     next: (data:product[])=>this.products = data,
     error: ()=> this.products = []
    }
    )
  }

}
