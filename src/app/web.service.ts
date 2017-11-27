import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material'

@Injectable()
export class WebService {
    BASE_URL = 'http://localhost:49198/api';
    
    messages = [];

    constructor(private http:Http, private sb : MatSnackBar){
        this.getMessages();
    }
    
    async getMessages(){
        try {
            var response = await this.http.get(this.BASE_URL+'/messages').toPromise();
            this.messages = response.json();
            
        } catch (error) {
            this.handleError("Unable to GET messages.");
        }

    }

    async postMessages(message ){
        try {
            var response = await this.http.post(this.BASE_URL + '/messages',message).toPromise();
            this.messages.push(response.json());
        } catch (error) {
            this.handleError("Unable to POST message.");
            
        }

    }

    private handleError(error){
        console.error(error);
        this.sb.open(error,'close',{duration:5000});
    }
}