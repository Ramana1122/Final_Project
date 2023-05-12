import { Component} from '@angular/core';
import { EnquiryService } from 'src/app/services/enquiry.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-responsepage',
  templateUrl: './responsepage.component.html',
  styleUrls: ['./responsepage.component.css']
})
export class ResponsepageComponent {
  id:any;
  responsebox: any;
  errors:string[]=[];
response:any;
  constructor(private hs:EnquiryService,private ar:ActivatedRoute) { 
    this.ar.params.subscribe({
      next:(params)=>{
        this.id=params['id']
        this.readData()
      },
      error:()=>this.id=0
    })
  }
  readData() {
    this.hs.getEnquiryId(this.id).subscribe({
      next:(data:any)=>this.responsebox=data,
      error:()=> this.responsebox={}
    })
  }

  sendResponse(thisid:number){
    let obj={
      commonid: thisid,
      response: this.response
    }
      this.hs.postEnquiry2(obj).subscribe(
       {
    next:(data:any)=>{
      alert("suggestion posted");   
      location.reload();
      },
      error:(error)=>alert("suggestion not posted") 
      });
      }
}
