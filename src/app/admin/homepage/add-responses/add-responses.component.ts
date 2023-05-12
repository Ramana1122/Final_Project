import { Component} from '@angular/core';
import { EnquiryService } from 'src/app/services/enquiry.service';

@Component({
  selector: 'app-add-responses',
  templateUrl: './add-responses.component.html',
  styleUrls: ['./add-responses.component.css']
})
export class AddResponsesComponent  {
  enquiries:any
  constructor(private fs:EnquiryService )  {
    this.fs.getEnquiry().subscribe(
       {
           next : (data:any)=> this.enquiries=data
       }
    )

}
}
