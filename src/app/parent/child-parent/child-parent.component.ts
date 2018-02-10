import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { NewServiceService } from '../../new-service.service';

@Component({
  selector: 'app-child-parent',
  templateUrl: './child-parent.component.html',
  styleUrls: ['./child-parent.component.css']
})
export class ChildParentComponent implements OnInit {
  gottenValue: any;
  childValueToTheService = "This is the Child value to The Service"
  
  @Input() parentValue: any;
  @Output() childValue: EventEmitter<any> = new EventEmitter<any>();
  constructor(private myService: NewServiceService) { }

  ngOnInit() {
    this.myService.settingValueFromChild(this.childValueToTheService);
    this.gottenValue = this.myService.getValueFromParentThrougService();
  }

  clicked(){
    this.childValue.emit("Child Is Giving you the value :)")
  }
}
