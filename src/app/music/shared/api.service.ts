import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {

    clientId = '[ENTERYOURAPIKEY]'

    constructor(
      private http: Http
    ) {}

    get(url, attachClientId?) {
      // Should attach client id if the attachToken is true
      let actualUrl;
      attachClientId ? actualUrl = this.prepareUrl(url) : actualUrl = url;
      // Returns an obsrevable for the HTTP get request
      return this.http.get(actualUrl);
    }

    prepareUrl(url) {
      //Attach client id to stream url
      return `${url}?client_id=${this.clientId}`
    }

}