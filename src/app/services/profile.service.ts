import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class ProfileService {

  url = 'http://localhost:5000';

  constructor( private http: Http ) { }

  getProfile(profileID: number) {
    return this.http.get( this.url + '/api/getProfile/?index=' + profileID);
  }

  getLabels() {
    return this.http.get( this.url + '/api/getLabels/');
  }

  postLabel(index: number, label: number) {
    let data = {
      'index': index,
      'label': label,
    };
    console.log("yee")
    console.log(data);

    return this.http.post(this.url + '/api/makeLabel/', data);
  }

}
