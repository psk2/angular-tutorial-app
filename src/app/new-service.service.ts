import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { Http, Headers, RequestOptions } from "@angular/http";

@Injectable()
export class NewServiceService {
  HelloWorld: any;
  myString2: string;
  myString: string;
  apiEndPoint: string;
  constructor(private http: Http) {
    this.http = http;
    this.apiEndPoint = 'http://localhost:3000/state'
  }

  getValueFromParentThrougService() {
    return this.myString;
  }

  settingValueFromParent(argument) {
    this.myString = argument;
  }

  getValueFromChild() {
    return this.HelloWorld;
  }

  settingValueFromChild(value) {
    this.HelloWorld = value;
  }

  //   getString(){
  //     // this.myString = "Angular 4 tutorial";
  //     // this.myString2 = "Angular 4";
  //     return this.myString;
  //   }
  getStates(): Observable<any> {
    // const searchText = 'js';
    // const url = 'http://services.groupkt.com/state/get/'+countrycode+'all';
    // const url= 'http://services.groupkt.com/state/get/IND/all';
    return this.http
      .get(`${this.apiEndPoint}/IND`)
      .map(function(res) {
        console.log('res :', res);
        const data = res.json();
        return data;
      });
  }

  getstateDetails(code): Observable<any> {
    console.log(code);
    // const searchText = 'js';
    // const url = 'http://services.groupkt.com/country/get/all';
    const url = `${this.apiEndPoint}/IND/${code}`
    return this.http.get(url).map(res => {
      const user = res.json();
      return user;
    });
  }
}
