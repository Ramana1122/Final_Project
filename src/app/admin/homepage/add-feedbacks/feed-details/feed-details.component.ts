import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-feed-details',
  templateUrl: './feed-details.component.html',
  styleUrls: ['./feed-details.component.css']
})
export class FeedDetailsComponent {
  @Input() feedback:any;
}
