import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx'; //for observables
import { MatSnackBar } from '@angular/material'

@Injectable()
export class WebService {
    BASE_URL = 'http://localhost:49198/api';
    
    //messages array has been made private since the use of the subject below(messageSubject)
    //observables can observe subjects , and so subscribers will recieve updates automatically
    // private messages = [];
    
    private messageStore = [];

    private messageSubject = new Subject();

    public messages = this.messageSubject.asObservable();

    constructor(private http:Http, private sb : MatSnackBar){
        this.getMessages();
    }
    
    //implemented using Observables instead of promises
    getMessages(user?){
            //inline if statement that wilset the value of user if it is provided
            user = (user) ? '/' + user : '';
            //using an observable
            this.http.get(this.BASE_URL+'/messages' + user).subscribe(response => {
                // this.messages = response.json();
                // this.messageSubject.next(this.messages);
                this.messageStore = response.json();
                this.messageSubject.next(this.messageStore);
            //the try, catch will not work with observables; now intead using a second error lamba param
            },error => {
                this.handleError("Unable to GET messages.");
            });
     }

    //implemented using promises
    async postMessages(message ){
        try {
            var response = await this.http.post(this.BASE_URL + '/messages',message).toPromise();
            this.messageStore.push(response.json());
            this.messageSubject.next(this.messageStore);
        } catch (error) {
            this.handleError("Unable to POST message.");
            
        }

    }

    private handleError(error){
        console.error(error);
        this.sb.open(error,'close',{duration:5000});
    }
}