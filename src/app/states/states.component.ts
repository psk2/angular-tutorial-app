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
	public jwt: string;
	public deviceUsageDetails: any;
	constructor(private router: Router, private myService: NewServiceService) { }
	searchForm = new FormGroup({
		search: new FormControl()
	})

	ngOnInit() {
		this.togggleUsing = 'state';
		this.myService.getStates().subscribe(
			res => {
				this.resultSet = res.RestResponse.result;
				this.resultSetCount = this.resultSet.length;
				this.sortyBy("state")
			}
		);
	}

	getSomeDetails(item) {
		this.router.navigate(['state', item.abbr])
	}

	sortyBy(event) {
		this.toggleButton = !this.toggleButton;
		if (this.toggleButton) {
			this.toggleValue = 'name';
			this.togggleUsing = 'capital';
		} else {
			this.toggleValue = 'capital';
			this.togggleUsing = 'name';
		}
	}

}
