import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

  login(){
    localStorage.setItem('username', this.username);
    localStorage.setItem('password', this.password);
    if(this.username != '' && this.password != ''){
      this.router.navigate(['survey']);
    }
  }
}
