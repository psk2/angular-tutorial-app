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
  username = 'Angular 4 ';
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
    {
      name: 'New-form',
      url : 'new-form'
    },
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
  // myService.setString("why is this happening");
  
  // getUsers(){

    
    gotoDetail(){
      this.student = {
        name: "anand <br/> battacharya"
      }
      console.log(this.username)
      // this.student = "Anand"
    }
  ngOnInit(){
    this.date = new Date();
    // setInterval(() => { 
    //   this.date = new Date();
    // }, 1000 * 60 * 10);
    // setTimeout(() => {
    //   this.date = new Date();
    // },500);
    // this.myService.getUser().subscribe(
    //   res => {
    //     console.log(res);
    //     this.resultSet = res.RestResponse.result;
    //     this.resultSetCount = this.resultSet.length;
    //     // if(this.resultSetCount) 
    //     // this.enabled_flag = true;
    //   }
    // );
  }

}
