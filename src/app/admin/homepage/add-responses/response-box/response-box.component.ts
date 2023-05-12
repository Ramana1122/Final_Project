import { Component, Input } from '@angular/core';
import { EnquiryService } from 'src/app/services/enquiry.service';
@Component({
  selector: 'app-response-box',
  templateUrl: './response-box.component.html',
  styleUrls: ['./response-box.component.css']
})
export class ResponseBoxComponent  {
  @Input() enquiries:any;
}
