import { Component } from '@angular/core';
import { NavComponent } from './nav.component';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
            <nav></nav>
            <router-outlet></router-outlet>
            `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // to capture and the events emitted from the components , needs a viewChild importfrom angular/core;
  // in addition to adding the binding to the template tag for messages in the form:  (onPosted)="onPosted($event)"
  // @ViewChild(MessagesComponent) messages : MessagesComponent;
  // onPosted(message){
  //   // console.log(message);
  //   // this.messages.messages.push(message);
  // }
}
