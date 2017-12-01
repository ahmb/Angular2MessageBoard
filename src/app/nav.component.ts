import { Component } from '@angular/core'
import { AuthService } from './auth.service'

@Component({
    selector: 'nav',
    // template:'this is a the messages component: {{ messages[0].text }}'
    template: `
            <mat-toolbar color="primary">
                <button mat-button routerLink="/">Message Board</button>
                <button mat-button routerLink="/messages">Messages</button>
                <span style="flex: 1 1 auto"></span>
                <button *ngIf="!auth.isAuthenticated" mat-button routerLink="/register">Register</button>
                <button *ngIf="auth.isAuthenticated" mat-button routerLink="/">Welcome {{auth.name}}</button>
                <button *ngIf="auth.isAuthenticated" mat-button (click)="auth.logout()">Logout</button>
                
            </mat-toolbar>
            `
})
export class NavComponent{
    constructor(private auth : AuthService){}

    // messages = [{text:'some text',owner:'Tim'},{text:'other message',owner:'Bob'}];
}
