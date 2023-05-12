import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpLoaderFactory, SharedModule } from '../shared/shared.module';
import { AddProductsComponent } from './homepage/add-products/add-products.component';
import { AddDietplanComponent } from './homepage/add-dietplan/add-dietplan.component';
import { AddFeedbacksComponent } from './homepage/add-feedbacks/add-feedbacks.component';
import { AddResponsesComponent } from './homepage/add-responses/add-responses.component';
import { FeedDetailsComponent } from './homepage/add-feedbacks/feed-details/feed-details.component';
import { ResponseBoxComponent } from './homepage/add-responses/response-box/response-box.component';
import { ResponsepageComponent } from './homepage/add-responses/responsepage/responsepage.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AdminfilterPipe } from '../pipes/adminfilter.pipe';

@NgModule({
  declarations: [
    HomepageComponent,
    AddProductsComponent,
    AddDietplanComponent,
    AddFeedbacksComponent,
    AddResponsesComponent,
    FeedDetailsComponent,
    ResponseBoxComponent,
    ResponsepageComponent,
    AdminfilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule, 
    FormsModule,
    HttpClientModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ]
})
export class AdminModule { 
  
}
