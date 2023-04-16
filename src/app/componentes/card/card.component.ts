import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../info/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card:Card = {} as Card;
  constructor() { }

  ngOnInit(): void {
  }

  addToFav() {
    console.log(this.card)
  }

}
