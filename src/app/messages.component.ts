import { Component } from '@angular/core'
import { WebService } from './web.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'messages',
    // template:'this is a the messages component: {{ messages[0].text }}'
    
    template: `
             <div *ngFor="let message of webService.messages">
                <mat-card class="card">
                    <mat-card-title [routerLink]="['/messages',message.owner]" style="cursor: pointer">{{message.owner}} </mat-card-title>
                    <mat-card-content> by {{message.text}}</mat-card-content>
                </mat-card>
             </div>
             <button mat-button>text</button>
             
            `
})
export class MessagesComponent{
    constructor(private webService : WebService, private route : ActivatedRoute){}

    ngOnInit(){
        console.log(this.route.snapshot.params.name);
    }
    // messages = [{text:'some text',owner:'Tim'},{text:'other message',owner:'Bob'}];
}
