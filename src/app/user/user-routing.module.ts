import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './home/userhome/details/details.component';
import { UserhomeComponent } from './home/userhome/userhome.component';
import { DietPlanComponent } from './home/diet-plan/diet-plan.component';
import { FeedbackComponent } from './home/feedback/feedback.component';
import { ReachUsComponent } from './home/reach-us/reach-us.component';
import { AgeDetailsComponent } from './home/diet-plan/age-details/age-details.component';
import { ReachusBoxComponent } from './home/reach-us/reachus-box/reachus-box.component';
import { ResponsepageComponent } from '../admin/homepage/add-responses/responsepage/responsepage.component';
import { OwndietComponent } from './home/owndiet/owndiet.component';

/** @
 *    /user/home/
 *    /user/home/details
 * */
const routes: Routes = [
  {
  path:"home",
  component: HomeComponent,
  
  children: [
    {
      path: "",
      component: UserhomeComponent
    },
    {
      path: "Diet",
      component: UserhomeComponent
    },
    {
      path: "details",
      component: DetailsComponent
    },
    {
      path:"DietPlan",
      component: DietPlanComponent,
    },
    {
      path:"Feedback",
      component: FeedbackComponent
    },
    {
      path:"ReachUs",
      component: ReachUsComponent
    },
    { path: "age-details/:id", 
    component: AgeDetailsComponent 
  },
  {
    path:"Owndiet",
    component:OwndietComponent
  }
  ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
