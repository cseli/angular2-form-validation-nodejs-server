import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {

    private _url = "http://localhost:8080/v1/spaform";

    constructor(private http: Http){}

    createPost(data) {
        const post = {
            name: "ds",
            email: "dsds@fsf"
        };
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this._url, data, options);
    }
}