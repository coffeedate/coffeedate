import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  questionTitles = []
  questionList = [
    'Do you have or want any pets?',
    'Would you rather stay in and watch netflix or go out?',
    'Is sexual compatibility important to you?',
    'Do believe a cup is half-empty or half-full?',
    'Are you a morning or a night person?',
    'Are you more of a city or country person?',
    'Are you a clean or messy person?',
    'Are you a religious person?',
    'Do you want children?',
    'Do you like to eat out or eat in?',
    'Do you like to play sports?',
    'Do you follow politics?',
    'Are you spontaneous or predictable?',
    'Are you looking for a long-term relationship?',
    'Do you tend to procrastinate?',
    'Do you like to travel?',
    'Are you an introvert or extrovert?',
    'Are you close with your family?',
    'Are you close with your family?'
  ]
  questionAnswers = [
    ['pets', 'no pets'],
    ['stay in and watch netflix', 'go out instead of staying in'],
    ['sexual compatibility matters', 'sexual compatibility does not matter'],
    ['cup is half-empty','cup is half-full'],
    ['morning person','night person'],
    ['city person','country person'],
    ['clean','messy'],
    ['religious','not religious'],
    ['want children','do not want children'],
    ['eat in','eat out'],
    ['play sports','do not play sports'],
    ['follows politics','does not follow politics'],
    ['spontaneous','predictable'],
    ['want long-term relationship','does not want long-term relationship'],
    ['procrastinates','does not procrastinate'],
    ['likes to travel','does not like to travel'],
    ['introvert','extrovert'],
    ['close to your family','not close to your family'],
    ['close to your family','not close to your family'],			 
  ]
  arr = Array.from({length: 20}, (x,i) => i);
  userAnswers = Array.from({length: 20}, (x,i) => '');
  name: any = localStorage.getItem('username') || 'YOUR_NAMES';
  constructor( private router: Router) { 

  }

  ngOnInit() {
  }

  logAnswer(i, ans){
    this.userAnswers.splice(i, 1);
    this.userAnswers.splice(i, 0, this.questionAnswers[i][ans]);
    console.log(this.userAnswers)
  }

  finish(){
    this.router.navigate(['profile']);
  }

}
