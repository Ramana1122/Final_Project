import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AddProductsComponent } from './homepage/add-products/add-products.component';
import { AddFeedbacksComponent } from './homepage/add-feedbacks/add-feedbacks.component';
import { AddDietplanComponent } from './homepage/add-dietplan/add-dietplan.component';
import { AddResponsesComponent } from './homepage/add-responses/add-responses.component';
import { ResponsepageComponent } from './homepage/add-responses/responsepage/responsepage.component';
const routes: Routes =[
  {
    path :"", component:HomepageComponent,
    children: [
      {
        path: "",
        component: AddProductsComponent
      },
      {
        path: "Diet",
        component: AddProductsComponent
      },
      {
        path:"DietPlan",
        component: AddDietplanComponent
      },
      {
        path:"Feedback",
        component: AddFeedbacksComponent
      },
      {
        path:"ReachUs",
        component: AddResponsesComponent
      },
      {
        path:"enquiries/:id",
        component: ResponsepageComponent
      }
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminRoutingModule { }
