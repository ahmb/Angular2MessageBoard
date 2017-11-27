import { Component } from '@angular/core'


@Component({
    selector: 'nav',
    // template:'this is a the messages component: {{ messages[0].text }}'
    template: `
            <mat-toolbar color="primary">
                <button mat-button routerLink="/">Message Board</button>
                <button mat-button routerLink="/messages">Messages</button>
            </mat-toolbar>
            `
})
export class NavComponent{
    constructor(){}

    // messages = [{text:'some text',owner:'Tim'},{text:'other message',owner:'Bob'}];
}
