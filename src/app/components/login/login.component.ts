import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  error = '';
  constructor(private router: Router, private ApiService: ApiService) { }

  ngOnInit() {
  }

  login(){
    localStorage.setItem('username', this.username);
    localStorage.setItem('password', this.password);
    if(this.username != '' && this.password != '') {
      this.router.navigate(['survey']);
    }
  }
}
