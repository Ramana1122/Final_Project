import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent  {
  id:any;
  name:any;
  Image:any;
  Measure:any;
  Grams:any;
  Calories:any;
  Fat:any;
  Protein:any;
  Sat:any;
  Fiber:any;
  Crabs:any;
  Type:any;

  gdata: any;
  searchText: any;

  errors:string[]=[];

  showForm = false;
  ProductService: any;

  constructor(private hs:ProductService) { }
   

  submit(){
    this.errors = []
   
    let expr=/^[a-z][a-z\._0-9]+@[a-z]+\.(com|net|co\.in|in)$/;
    if(this.name==undefined || this.name.length<3)
      this.errors.push("First name should be greatr than 3 characters")
    
    if(this.Measure==undefined)
      this.errors.push("Measure name should be greate than 1 characters")

    
    if(this.Grams==undefined)
    this.errors.push("Grams name should be greate than 1 characters")

    if(this.Calories==undefined)
    this.errors.push("Calories name should be greate than 1 characters")

    if(this.Image==undefined)
    this.errors.push("Calories name should be greate than 1 characters")

    if(this.Protein==undefined)
    this.errors.push("Protein name should be greate than 1 characters")

    if(this.Fat==undefined)
    this.errors.push("Fat name should be greate than 1 characters")

    if(this.Sat==undefined)
    this.errors.push("Sat name should be greate than 1 characters")

    if(this.Fiber==undefined)
    this.errors.push("Fiber name should be greate than 1 characters")

    if(this.Crabs==undefined)
    this.errors.push("Crabs name should be greate than 1 characters")

    if(this.Type==undefined)
    this.errors.push("Type should be Filled")
    console.log(this.errors.length)
      if(this.errors.length < 1){
        let obj={
          id:Math.round(Math.random()*100000),
          name: this.name,
          measure: this.Measure,
          grams:this.Grams,
          calories:this.Calories,
          protein:this.Protein,
          fat:this.Fat,
          sat:this.Sat,
          fiber:this.Fiber,
          crabs:this.Crabs,
          image:this.Image,
          type:this.Type
        }
        this.hs.postProduct(obj).subscribe({
          next: ()=>{
            alert("You Product is Added")
            this.name="",
            this.Measure="",
            this.Grams="",
            this.Calories="",
            this.Protein="",
            this.Fat="",
            this.Sat="",
            this.Fiber="",
            this.Crabs="",
            this.Image="",
            this.Type=""
          },
          error: ()=>alert("there is a problem posting your products")
        }
        )
      }
}
removeItem(id: any) {
  this.ProductService.removeProduct(id).subscribe(() => {
    this.getProducts2();
  });
}

getProducts2() {
  this.gdata = this.hs.getProducts().subscribe({
    next: (data: any) => this.gdata = data,
    error: () => this.gdata = []
  })
}
}
