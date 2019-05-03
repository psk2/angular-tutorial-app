import { Component, OnInit } from '@angular/core';
import { NewServiceService } from '../new-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-state-details',
  templateUrl: './state-details.component.html',
  styleUrls: ['./state-details.component.css'],
  providers: [NewServiceService]
})
export class StateDetailsComponent implements OnInit {
  stateDetails: any;

  constructor(private myService: NewServiceService, private activeRoute: ActivatedRoute) { }
  
    ngOnInit() {
      console.log(this.activeRoute)
      const stateId = this.activeRoute.snapshot.params['stateId'];
      console.log(stateId);
      this.myService.getstateDetails(stateId).subscribe(
        res =>{
          this.stateDetails = res;
          console.log(this.stateDetails);
        }
      )
    }

}
