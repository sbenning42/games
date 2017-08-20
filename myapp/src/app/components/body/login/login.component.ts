import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../../models/user';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailCtrl: FormControl;
  passwordCtrl: FormControl;

  loginForm: FormGroup;
  user = new User('', '', '', '');

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {

    this.emailCtrl = fb.control('', [Validators.required]);
    this.passwordCtrl = fb.control('', [Validators.required]);

    this.loginForm = fb.group({
      email : this.emailCtrl,
      password : this.emailCtrl,
    });

  }

  ngOnInit() {
  }

  signIn() {
    if (this.loginForm.valid) {
      this.authService.login(this.user)
    }
  }

}
