import { Injectable } from '@angular/core';
import { url } from './profile.service'
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class ApiService {

  constructor( private http: Http ) { }

  makeUser(userName, password, name, description, picture, interests, survey){
    let data = {
      'userName': userName,
      'password': password,
      'name': name,
      'description': description,
      'picture': picture,
      'interests': interests,
      'survey': survey
    };

    return this.http.post( url + '/api/makeUser/', data);
  }

  getUser(userName, password){
    return this.http.get( url + '/api/getUser?userName=' + userName + '&password=' + password);
  }

  getAllUsers(){
    return this.http.get( url + '/api/getAllUsers/');
  }

  like(userA, userB){
    let data = {
      'userA': userA,
      'userB': userB
    };

    return this.http.post( url + '/api/like/', data);
  }
}
