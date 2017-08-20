import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  emailCtrl: FormControl;
  nameCtrl: FormControl;
  passwordCtrl: FormControl;

  registerForm: FormGroup;

  user = new User('', '', '', '');

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.emailCtrl = fb.control('', [Validators.required]);
    this.nameCtrl = fb.control('', [Validators.required]);
    this.passwordCtrl = fb.control('', [Validators.required]);

    this.registerForm = fb.group({
      email : this.emailCtrl,
      name : this.nameCtrl,
      password : this.emailCtrl,
    });
  }

  ngOnInit() {
  }

  signUp() {
    if (this.registerForm.valid) {
      this.authService.register(this.user).subscribe(
        (user) => {},
        (errors) => {console.log(<any>errors)},
        () => {})
    } else {
      console.log(this.registerForm.value)
    }
  }

}
