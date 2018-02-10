import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  links = [
    {
      name: 'Search',
      url : 'search'
    },
    {
      name: 'States',
      url : 'user'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
