import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Name = ''
  Description = ''
  Interest = ''
  Avatar = ''
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    if( this.Name != '' && this.Description != '' && this.Interest != '' && this.Avatar != ''){
      this.router.navigate(['finding']);
    }
  }

}
