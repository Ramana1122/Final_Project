import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-add-dietplan',
  templateUrl: './add-dietplan.component.html',
  styleUrls: ['./add-dietplan.component.css']
})
export class AddDietplanComponent {
  id:any;
  title:any;
  image:any;
  description:any;
  errors:string[]=[];
  constructor(private hs:HomeService) { }
  
  submit(){
  this.errors = []
  if(this.title==undefined || this.title.length<3)
  this.errors.push("Name should be greater than 3 characters")
  if(this.image==undefined )
  this.errors.push("image is required")
  if(this.description==undefined)
  this.errors.push("First name should be greater than 3 characters")
  if(this.errors.length==0){
  let obj={
  id:Math.round(Math.random()*100000),
  title:this.title,
  image:this.image,
  description:this.description,
  }
  
  this.hs.postDietPlan(obj).subscribe({
  next: ()=>{
  alert("Successfully Added .Thank you..")
  this.title="",
  this.image="",
  this.description=""
  },
  error: ()=>alert("There is a problem in adding this!")
  })
  }
  }
  }