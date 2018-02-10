import { Component, OnInit } from '@angular/core';
import { ChildParentComponent } from './child-parent/child-parent.component';
import { NewServiceService } from '../new-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  gottenValue: string;
  showChildMessage: any = "This is the parent value";
  parentVariableList = {
    firstOne : "20"
  }
  parentValueToTheService = "This is the parent value to The Service"
  parentVarible = "200";
  constructor(private myService: NewServiceService) { }
  

  gotFromChild(gotTheString){
    this.showChildMessage = gotTheString;

  }
  ngOnInit() {
    this.myService.settingValueFromParent(this.parentValueToTheService);
    // console.log(this.myService.getValueFromChild())
    this.gottenValue = this.myService.getValueFromChild();
  }

}
