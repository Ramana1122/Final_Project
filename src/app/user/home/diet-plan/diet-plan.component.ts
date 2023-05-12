import { Component} from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-diet-plan',
  templateUrl: './diet-plan.component.html',
  styleUrls: ['./diet-plan.component.css']
})
export class DietPlanComponent {
  servicelist:any;
  constructor(private hs:HomeService) { 
    this.hs.getServices().subscribe(
      {
        next: (data:any)=> this.servicelist =data,
        error: ()=> this.servicelist=[]
      }
    )
  }
}
