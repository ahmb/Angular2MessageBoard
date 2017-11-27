import { Component } from '@angular/core';
import { MessagesComponent } from './messages.component';
import { NewMessageComponent } from './new-message.component';
import { NavComponent } from './nav.component';

@Component({
  selector: 'home',
  // templateUrl: './app.component.html',
  template: `
            <h1>Message Board </h1>
            <new-message></new-message>
            <messages></messages>`,
  styleUrls: ['./app.component.css']
})
export class HomeComponent {

  //to capture and the events emitted from the components , needs a viewChild importfrom angular/core;
  //in addition to adding the binding to the template tag for messages in the form:  (onPosted)="onPosted($event)"
  // @ViewChild(MessagesComponent) messages : MessagesComponent;
  // onPosted(message){
  //   // console.log(message);
  //   // this.messages.messages.push(message);
  // }
}
