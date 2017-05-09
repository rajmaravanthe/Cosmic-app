import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { myCosmic } from '../services/auth.config';

@Injectable()
export class CosmicService {
    data = {}
    constructor(public http: Http) {

    };
    createAuthorizationHeader(headers: Headers) {
        headers.append('Accept', '*/*');
    }

    getHash() {
        return Md5.hashStr(myCosmic.timeStamp + myCosmic.privateID + myCosmic.publicID);
    }

    getUserKey() {
        return "ts=" + myCosmic.timeStamp + "&apikey=" + myCosmic.publicID + "&hash=" + this.getHash();
    }

    getService(url): any {
        return this.http.get(url)
            .map(response => {
                return response.json().data.results;
             }
         )
    }
}
