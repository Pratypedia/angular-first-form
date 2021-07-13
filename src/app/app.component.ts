import { Component, VERSION, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from './user-date.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
user_Form: FormGroup;
  ngOnInit()  {
}
  name = 'Angular ' + VERSION.major;

  onSubmit() {
    if(this.user_Form.valid === true){
    this.user_service.addUserInfo(this.user_Form.value);
    this.user_Form.reset();
   }
   else
   alert("Form Not Submitted - invalid or required parameters not filled");
  }

  constructor(private formBuilder: FormBuilder, private user_service: UserDataService){
    this.user_Form=this.formBuilder.group({

      fname: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', Validators.required],
      Password: ['', Validators.required],
      Phone: ['', Validators.required],
      emailSwitch: [false],
      Email: ['', Validators.required],
      address: [''],
      contacts: [''],
      Valid_period: ['', Validators.required],
      appID: ['', Validators.required],
      Capacity: ['', Validators.required],
      Postscript: [''],
      authorization: [false],
    })
    
  }
}

