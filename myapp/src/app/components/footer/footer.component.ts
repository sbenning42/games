import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

import { MdDialog } from '@angular/material';

import { MatchmackingFormComponent } from '../body/matchmacking-form/matchmacking-form.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private authService: AuthService,
    public dialog: MdDialog
  ) { }

  ngOnInit() {
  }

  openMatchmackingDialog() {
    this.dialog.open(MatchmackingFormComponent);
  }

}
