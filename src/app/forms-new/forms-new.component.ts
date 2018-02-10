import {Component, OnInit} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms"
@Component({
  selector: 'app-forms-new',
  templateUrl: './forms-new.component.html',
  styleUrls: ['./forms-new.component.css']
})
export class FormsNewComponent implements OnInit {
  
  name: string;
  radioTest: FormGroup;
  gender;
  // flag = false;
  constructor(fb: FormBuilder) {
    this.name = 'Angular2'
    this.radioTest = fb.group({
      gender: ['', Validators.required]
    });
  }
  sumbitform(){
    console.log(this.radioTest.value)
  }
  ngOnInit(): void {
    // this.flag = true;
  }
}
