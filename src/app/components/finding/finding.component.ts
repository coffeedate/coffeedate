import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-finding',
  templateUrl: './finding.component.html',
  styleUrls: ['./finding.component.css']
})
export class FindingComponent implements OnInit {

  userList = [];
  likedList = [];
  arr = Array.from({length: this.userList.length}, (x,i) => i);
  name: any = localStorage.getItem('username') || 'YOUR_NAMES';
  constructor( private ApiService: ApiService , private router: Router) { 
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
    this.likedList.push[i];
    let userA = localStorage.getItem('name');
    let userB = this.userList[i].name;
    this.ApiService.like(userA, userB).subscribe(
      (data) =>{
        if(data['_body'] == '"You have a match!"'){
          let arr = [userA, userB];
          arr = arr.sort();
          this.router.navigate(['date', { room: arr[0] + arr[1] }]);
        }
        console.log(data)
      }, 
      (err) =>{
        console.log(err)
      }
    )
  }

}
