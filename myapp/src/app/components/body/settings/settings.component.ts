import { Component, OnInit} from '@angular/core';
import { User } from '../../../models/user';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  logged: boolean;

  constructor(
      private authService: AuthService
    ) {
      this.logged = this.authService.isLogged();
      console.log(this.logged)
    }

  ngOnInit() {
  }

}
