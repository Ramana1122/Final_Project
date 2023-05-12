import { Component } from '@angular/core';
import { EnquiryService } from 'src/app/services/enquiry.service';
@Component({
  selector: 'app-reach-us',
  templateUrl: './reach-us.component.html',
  styleUrls: ['./reach-us.component.css']
})
export class ReachUsComponent  {
  enquiries:any
  responses:any
  constructor(private fs:EnquiryService )  {
    this.fs.getEnquiry().subscribe(
       {
           next : (data:any)=> this.enquiries=data
       }
    )
}
}
