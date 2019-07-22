import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { NewServiceService } from '../new-service.service';
import { OrderByPipe } from '../order-by.pipe';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {
  togggleUsing: string;
  toggleValue: string;
  toggleButton: boolean;
  stateDetailsCount: any;
  stateDetails: any;
  sometext = "Haii. Good Morning <br/> Have a nice day."
  public searchText;
  public resultSet;
  public resultSetCount;
  public jwt:string;
  public deviceUsageDetails: any;
  constructor(private router: Router, private myService: NewServiceService) { }
  searchForm = new FormGroup({
    search: new FormControl()
  })

  ngOnInit() {
    // this.toggleValue = null;
    this.togggleUsing = 'capital';
    // this.myService.getStates().subscribe(
    //   res => {
    //     console.log(res);
    //     this.resultSet = res.RestResponse.result;
    //     this.resultSetCount = this.resultSet.length;
    //   }
    // );

    this.myService.getAuthToken().subscribe(res => {
      console.log('res :', res);
      this.jwt = res.jwt;
      this.myService.getDeviceUsageDetails(res.jwt).subscribe(
        response => {
          this.deviceUsageDetails  = response;
          console.log("response : ", response);
        }
      );
      return res.jwt;
    });
    
  }
  getSomeDetails(item) {
    // console.log('item', item)
    this.router.navigate(['state', item.abbr])
  }
  sortyBy(event) {
    console.log(event)
    this.toggleButton = !this.toggleButton;
    if (this.toggleButton) {
      this.toggleValue = 'capital';
      this.togggleUsing = 'name';
    } else {
      this.toggleValue = 'name';
      this.togggleUsing = 'capital';
    }
  }

}
