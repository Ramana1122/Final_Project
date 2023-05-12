import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  lang:any= "english"
  languages:any=[
    {name:"English",value:"english"},
    {name:"Tamil",value:"tamil"},
    {name:"Telugu",value:"telugu"},
    {name:"Hindi",value:"hindi"}

  ]
  constructor(private router:Router,private ar:ActivatedRoute,private ts:TranslateService) {
    this.ts.use(this.lang)
   }
  ngOnInit(): void {
  }
  dietproducts(){
this.router.navigate(['Diet'],{relativeTo:this.ar})
  }
  dietplan(){
    this.router.navigate(['DietPlan'],{relativeTo:this.ar})
      }
      logout(): void {
        // remove session data
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("usertype");
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("email");
      
        // navigate to login page
        this.router.navigate(['login']);
      }
      changeLang():void{
        this.ts.use(this.lang)
     }
}
