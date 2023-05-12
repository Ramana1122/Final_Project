import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-reachus-box',
  templateUrl: './reachus-box.component.html',
  styleUrls: ['./reachus-box.component.css']
})
export class ReachusBoxComponent  {

  constructor() { }
  @Input() enquiries:any;
  @Input() responses:any

}
