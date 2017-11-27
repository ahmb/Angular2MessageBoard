import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, 
  MatCheckboxModule, 
  MatCardModule,
  MatInputModule,
  MatSnackBarModule,
  MatToolbarModule
 } from '@angular/material';


import { MessagesComponent } from './messages.component';
import { AppComponent } from './app.component';
import { WebService } from './web.service';
import { HttpModule }  from '@angular/http';
import { NewMessageComponent } from './new-message.component';
import {FormsModule} from '@angular/forms';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';


//empty routes array
var routes = [{
  path:'',
  component: HomeComponent
},
{
  path:'messages',
  component: MessagesComponent
},
{
  path:'messages/:name',
  component: MessagesComponent
}];

@NgModule({
  declarations: [
    //all components need to be added onto here
    AppComponent, MessagesComponent,NewMessageComponent,NavComponent,HomeComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,MatButtonModule,MatCheckboxModule, MatCardModule,
    MatInputModule,MatSnackBarModule,MatToolbarModule,HttpModule,FormsModule,RouterModule.forRoot(routes)
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
