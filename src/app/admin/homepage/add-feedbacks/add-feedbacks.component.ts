import { Component } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-add-feedbacks',
  templateUrl: './add-feedbacks.component.html',
  styleUrls: ['./add-feedbacks.component.css']
})
export class AddFeedbacksComponent  {
  feedbacks:any
  constructor(private fs:FeedbackService)  {
    this.fs.getFeedbacks().subscribe(
       {
           next : (data:any)=> this.feedbacks =data
       }
    )
 }

}
