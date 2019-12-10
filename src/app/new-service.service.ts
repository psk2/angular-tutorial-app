import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NewServiceService {
  HelloWorld: any;
  myString2: string;
  myString: string;
  apiEndPoint: string;
  constructor(private http: HttpClient) {
    this.http = http;
    this.apiEndPoint = 'http://localhost:3005/state'
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

  getStates(): Observable<any> {
    return this.http
      .get(`${this.apiEndPoint}/IND`)
  }

  getstateDetails(code): Observable<any> {
    const url = `${this.apiEndPoint}/IND/${code}`
    return this.http.get(url)
  }

  // Example of a POST call

  // getDeviceUsageDetails(jwt): Observable<any> {
  //   let headers = new HttpHeaders();
  //   headers.append('Authorization', `Bearer ${jwt}`);
  //   let options = { headers: headers };
  //   let requestBody = {
  //     "workstationName": "YYZ1CN02",
  //     "iataCode": "YYZ",
  //     "startDate": "2017-02-23 04:00:30",
  //     "endDate": "2017-02-25 04:00:30",
  //     "accountingCode": "176"
  //   }
  //   const url = `http://localhost:8082/api/deviceusage`;
  //   return this.http.post(url, requestBody, options);
  // }
}
