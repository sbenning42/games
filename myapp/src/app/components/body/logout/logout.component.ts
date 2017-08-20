import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.logout().subscribe(
      (success) => {},
      (errors) => {console.log(<any>errors)},
      () => {this.router.navigate(['home'])})
  }

}
