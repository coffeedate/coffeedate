import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-finding',
  templateUrl: './finding.component.html',
  styleUrls: ['./finding.component.css']
})
export class FindingComponent implements OnInit {

  userList = [];
  arr = Array.from({length: this.userList.length}, (x,i) => i);
  name: any = localStorage.getItem('username') || 'YOUR_NAMES';
  constructor( private ApiService: ApiService ) { 
    this.getUsers();
  }

  ngOnInit() {
  }

  getUsers(){
    this.ApiService.getAllUsers().subscribe(
      (data) => {
        // console.log(data);
        let body = JSON.parse(data['_body']);
        // console.log(body)
        for(let item in body){
          // console.log(item)
          this.userList.push(body[item]);
        }

        this.arr = Array.from({length: this.userList.length + 1}, (x,i) => i);
        // console.log(this.userList)
      }, 
      (err) => {
        console.log(err);
      }
    )
  }

  like(i) {
    this.ApiService.like(localStorage.getItem('name'), this.userList[i].name).subscribe(
      (data) =>{
        console.log(data)
      }, 
      (err) =>{
        console.log(err)
      }
    )
  }

}
