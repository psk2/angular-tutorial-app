import { Component } from '@angular/core';
import { NewServiceService } from './new-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[NewServiceService]
})
export class AppComponent {
  parentVariableList = {
    firstOne : "20"
  }
  date: Date;
  stateDetails: any;
  stateDetailsCount: any;
  resultSet: any;
  resultSetCount: any;
  tutorial: string;
  student:any;
  title = 'app';
  username = 'Angular';
  enabled_flag = false;
  links = [
    {
      name: 'Home',
      url : 'home'
    },
    {
      name: 'States',
      url : 'states'
    },
    {
      name: 'Form',
      url : 'forms'
    },
    // {
    //   name: 'New-form',
    //   url : 'new-form'
    // },
    {
      name: 'Child',
      url : 'child-parent'
    },
    {
      name: 'Parent-Child',
      url : 'parent'
    },
    
  ];
  constructor(private myService:NewServiceService){ 
    
  }
    gotoDetail(){
      this.student = {
        name: "anand <br/> battacharya"
      }
      console.log(this.username)
    }
  ngOnInit(){
    this.date = new Date();
  }

}
