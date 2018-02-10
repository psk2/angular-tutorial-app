import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  password: any;
  username: any;
  myForm: FormGroup;
  passInvalid = false;
  stringValue: string;
  constructor(private formBuilder: FormBuilder, ) {
    this.myForm = formBuilder.group({
      'username': new FormControl('you can write default value here', Validators.required),
      'password': new FormControl('', Validators.required),
    })
  }

  ngOnInit() {
  }
  onFormSubmit(){
    console.log(this.myForm)
    if(this.myForm.controls.password.invalid == true)
    this.passInvalid = true;
    this.stringValue ="password is invalid";
    console.log("password is invalid")
  }
  onNgModalFormSubmit(){
    console.log("username",this.username);
    console.log("password",this.password);
  }

}
