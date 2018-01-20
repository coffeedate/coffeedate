import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finding',
  templateUrl: './finding.component.html',
  styleUrls: ['./finding.component.css']
})
export class FindingComponent implements OnInit {

  userList = [
    {
      name: 'Wellford Chan',
      description: 'the boi',
      picture: 'https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/11061206_10202668311107436_8620547020144133577_n.jpg?oh=9e13008c4ca1bbbd6e221369f8776d41&oe=5ADC8F1A',
      interests: 'long walks on the beach' 
    },
    {
      name: 'James Chen',
      description: 'kassidin main',
      picture: 'https://scontent.fsnc1-1.fna.fbcdn.net/v/l/t1.0-9/14079948_10208635955750119_4515098002705318896_n.jpg?oh=659971a58f78a90e1b3facefec0b515f&oe=5AE97E85',
      interests: 'long walks on the beach' 
    },
    {
      name: 'Kushtie Nguyen',
      description: 'smokes joints',
      picture: 'https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/11146244_955466264494134_1735259667299678513_n.jpg?oh=5ec018932da6d589edb03bc1790b8322&oe=5AD83BE4',
      interests: 'long walks on the beach' 
    },
    {
      name: 'Ashwinee Panda',
      description: 'no longer endangered',
      picture: 'https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/26814904_878256455667619_4477007155290854499_n.jpg?oh=005ebf3cd5721f7d675865bfa307729a&oe=5AE4C9C2',
      interests: 'long walks on the beach' 
    },
    {
      name: 'Ashwinee Panda',
      description: 'no longer endangered',
      picture: 'https://i.imgur.com/A0ZYKAb.png',
      interests: 'long walks on the beach' 
    },
  ]
  arr = Array.from({length: this.userList.length}, (x,i) => i);
  name: any = localStorage.getItem('username') || 'YOUR_NAMES';
  constructor() { }

  ngOnInit() {
  }

}
