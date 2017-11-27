import { Component } from '@angular/core'
import { WebService } from './web.service'

@Component({
    selector: 'new-message',
    template: `
        <mat-card class="card">
            <mat-card-content>
                <mat-input-container>
                    <input [(ngModel)]="message.owner" matInput placeholder="Name">
                </mat-input-container>
                <mat-input-container>
                    <textarea [(ngModel)]="message.text" matInput placeholder="Message"></textarea>
                </mat-input-container>
                <mat-card-actions>
                    <button (click)="post()" mat-button color="primary">POST</button>
                </mat-card-actions>
            </mat-card-content>
        </mat-card>
    `
    // template:'this is a the messages component: {{ messages[0].text }}'
})
export class NewMessageComponent{

    //used with ,Output,EventEmitter imports from angular core ; also add this.onPosted.emit(this.message); to the onPost()
    // @Output() onPosted = new EventEmitter();

    constructor(private webService : WebService){}
    
    // messages = [{text:'some text',owner:'Tim'},{text:'other message',owner:'Bob'}];
    message = {
        owner : "test",
        text: ""
    }

    post(){
        // console.log(this.message);
        this.webService.postMessages(this.message);
        
    }
}
