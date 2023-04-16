import { Component, OnInit } from '@angular/core';
import { Card } from '../info/card';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards: Card[] = [
    {
      src:"./assets/img/card1.jpg",
      alt: "titulo card1",
      titulo: "titulo card1",
      subtitulo: "subtitulo card1",
      texto: "texto card1",
    },
    {
      src:"./assets/img/card2.jpg",
      alt: "titulo card2",
      titulo: "titulo card2",
      subtitulo: "subtitulo card2",
      texto: "texto card2",
      
    },
    {
      src:"./assets/img/card3.jpg",
      alt: "titulo card3",
      titulo: "titulo card3",
      subtitulo: "subtitulo card3",
      texto: "texto card3",
    },
  ]

  
 
  constructor() { }

  ngOnInit(): void {
  }

}
