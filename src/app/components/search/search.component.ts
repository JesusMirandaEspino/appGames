import { Component, OnInit } from '@angular/core';
import { GetallgameService } from 'src/app/services/getallgame.service';
import { GameList,Result } from 'src/app/interfaces/listGames';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public games:GameList = <GameList>{};
  public listGames: Result[] = [];

  constructor( private getallgame: GetallgameService ) { }

  ngOnInit(): void {
  }




  gameSearch( game:string ){
    game = game.trim();

    if( game.length == 0 ){
      return;
    }

    this.getallgame.searchGame( game ).subscribe( ( result ) => {

      this.games = result;

      this.listGames = this.games.results;

      console.log( this.listGames );

    } );

  }

}
