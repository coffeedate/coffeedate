import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { ApiService } from '../../services/api.service'

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
  constructor(private router: Router, private ApiService: ApiService) { }

  ngOnInit() {
  }

  submit(){
    if( this.Name != '' && this.Description != '' && this.Interest != '' && this.Avatar != ''){
      this.ApiService.makeUser(localStorage.getItem('username'), localStorage.getItem('password'), this.Name, this.Description, this.Avatar, this.Interest).subscribe(
        (data) => {
          console.log(data)
          this.router.navigate(['finding']);
        },
        (err) => {
          console.log(err)
          this.router.navigate(['finding']);
        }
      )
    }
  }

}
