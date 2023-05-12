import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { TypefilterPipe } from '../pipes/typefilter.pipe';
import { DietPlanComponent } from './home/diet-plan/diet-plan.component';
import { FeedbackComponent } from './home/feedback/feedback.component';
import { ReachUsComponent } from './home/reach-us/reach-us.component';
import { HttpClientModule } from '@angular/common/http';
import {UserhomeComponent}  from './home/userhome/userhome.component'
import { ProductComponent } from './home/userhome/product/product.component';
import { ProductrowComponent } from './home/userhome/productrow/productrow.component';
import { DetailsComponent } from './home/userhome/details/details.component';
import { ServiceBoxComponent } from './home/diet-plan/service-box/service-box.component';
import { EnqiryFormComponent } from './home/diet-plan/enqiry-form/enqiry-form.component';
import { AgeDetailsComponent } from './home/diet-plan/age-details/age-details.component';
import { FeedbackBoxComponent } from './home/feedback/feedback-box/feedback-box.component';
import { FeedbackFormComponent } from './home/feedback/feedback-form/feedback-form.component';
import { ReachusBoxComponent } from './home/reach-us/reachus-box/reachus-box.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchfilterPipe } from '../pipes/searchfilter.pipe';
import { OwndietComponent } from './home/owndiet/owndiet.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    HomeComponent,
    TypefilterPipe,
    SearchfilterPipe,
    DietPlanComponent,
    FeedbackComponent,
    ReachUsComponent,
    UserhomeComponent,
    ProductComponent,
    ProductrowComponent,
    DetailsComponent,
    ServiceBoxComponent,
    EnqiryFormComponent,
    AgeDetailsComponent,
    FeedbackBoxComponent,
    FeedbackFormComponent,
    ReachusBoxComponent,
    OwndietComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    UserRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    DragDropModule,
    MaterialModule
  
  ]
})
export class UserModule { 

}
