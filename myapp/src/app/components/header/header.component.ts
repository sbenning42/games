import { Component, OnInit} from '@angular/core';

import { AuthService } from '../../services/auth.service';

import { MdDialog } from '@angular/material';

import { RegisterComponent } from '../body/register/register.component';
import { LoginComponent } from '../body/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthService,
    public dialog: MdDialog
  ) { }

  ngOnInit() {
  }

  openRegisterDialog() {
    this.dialog.open(RegisterComponent);
  }

  openLoginDialog() {
    this.dialog.open(LoginComponent);
  }

}
