import { Component, OnInit, ViewChild,  ElementRef, Renderer2, AfterViewInit, } from '@angular/core';
import {  GetallgameService  } from 'src/app/services/getallgame.service';
import { GameList, Result } from 'src/app/interfaces/listGames';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public games:GameList = <GameList>{};
  public listGames: Result[] = [];
  public fondo = true;
  mostrar = true;

  constructor(  private getGamesServices: GetallgameService  ) { }

  ngOnInit(): void {

    this.getGamesServices.getGames().subscribe( ( games ) => {

      this.games = games;
      this.listGames = this.games.results;
      console.log(  this.listGames );

    } );

  }

  selectElement(game: HTMLDivElement, cardtext:HTMLDivElement ):void {







    game.classList.toggle('descubierto');

    cardtext.classList.toggle('ocultar');

  }

}
