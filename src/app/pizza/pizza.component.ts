import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  title = "I love pizza!";
  userName = 'Patricio Cordeiro';
  constructor() { }

  ngOnInit(): void {
  }

  getPosts(){


  }


}
