import { Component, OnInit } from '@angular/core';
import {  GetallgameService  } from 'src/app/services/getallgame.service';
import { GameList } from 'src/app/interfaces/listGames';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  public games:GameList[] = [];
  constructor(  private getGamesServices: GetallgameService  ) { }





  ngOnInit(): void {

    this.getGamesServices.getGames().subscribe( ( games ) => {

      this.games = games;

      console.log( this.games );


    } );


  }

}
