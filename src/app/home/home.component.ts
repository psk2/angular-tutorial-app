import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  links = [
    {
      name: 'Form',
      url : 'forms'
    },
    {
      name: 'States',
      url : 'states'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
