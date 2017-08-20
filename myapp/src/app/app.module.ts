import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/*
Official additional modules
*/

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.routes';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/*
Others additional modules
*/

import 'hammerjs';

import { MdToolbarModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdListModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdSelectModule } from '@angular/material';
import { MdGridListModule } from '@angular/material';
import { MdChipsModule } from '@angular/material';



/*
Myapp services
*/

import { HttpService } from './services/http.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { MatchmackingService } from './services/matchmacking.service';
import { GameService } from './services/game.service';
import { MatchService } from './services/match.service';

import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './components/body/home/home.component';
import { RegisterComponent } from './components/body/register/register.component';
import { LoginComponent } from './components/body/login/login.component';
import { SettingsComponent } from './components/body/settings/settings.component';
import { LogoutComponent } from './components/body/logout/logout.component';
import { MatchmackingsGalleryComponent } from './components/body/matchmackings-gallery/matchmackings-gallery.component';
import { MatchmackingDetailComponent } from './components/body/matchmackings-gallery/matchmacking-detail/matchmacking-detail.component';
import { MatchmackingsListComponent } from './components/body/matchmackings-gallery/matchmackings-list/matchmackings-list.component';
import { MatchmackingComponent } from './components/body/matchmackings-gallery/matchmackings-list/matchmacking/matchmacking.component';
import { MatchmackingFormComponent } from './components/body/matchmacking-form/matchmacking-form.component';
import { MatchComponent } from './components/body/match/match.component';
import { MorpionGameComponent } from './components/body/morpion-game/morpion-game.component';

/*
Angular-cli auto-import statements
*/

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    SettingsComponent,
    LogoutComponent,
    MatchmackingsGalleryComponent,
    MatchmackingDetailComponent,
    MatchmackingsListComponent,
    MatchmackingComponent,
    MatchmackingFormComponent,
    MatchComponent,
    MorpionGameComponent,
  ],
  imports: [
    routes,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdDialogModule,
    MdInputModule,
    MdListModule,
    MdCardModule,
    MdSelectModule,
    MdGridListModule,
    MdChipsModule,
  ],
  providers: [
    HttpService,
    AuthService,
    UserService,
    MatchmackingService,
    GameService,
    MatchService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
