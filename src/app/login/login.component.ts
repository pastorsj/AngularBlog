import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = "Login"
  formGroup: FormGroup

  constructor(fb: FormBuilder, private router: Router) {
    this.formGroup = fb.group({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  login(formValue: any, isFormValid: boolean) {
    if (isFormValid) {
      console.log('Logging in');
      console.log('Username', formValue['username']);
      console.log('Password', formValue['password']);
      this.router.navigate(['editor']);
    }
  }

}
