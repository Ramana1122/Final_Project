import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  state?:any;
  qty:any=1;
  active:boolean=true;

  constructor(private route:ActivatedRoute,private router:Router) { 
    this.state=this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
      
  }

}
