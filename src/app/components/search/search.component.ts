import { Component, OnInit,  } from '@angular/core';
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
  public gameTittle: string = '';

  constructor( private getallgame: GetallgameService ) { }

  ngOnInit(): void {
  }




  // Funcion para buscar un un juego, recibe el juego a buscar y el elemento input para limpiarlo
  gameSearch( game:string, input:HTMLInputElement ){
    game = game.trim();



    if( game.length == 0 ){
      return;
    }

    this.getallgame.searchGame( game ).subscribe( ( result ) => {

      this.games = result;

      this.listGames = this.games.results;

      console.log( this.listGames  );


      this.gameTittle = game;


      // Limpiar el input
      input.value = '';

    } );

  }


  selectElement(game: HTMLDivElement, cardtext:HTMLDivElement ):void {


    game.classList.toggle('descubierto');

    cardtext.classList.toggle('ocultar');

  }

}
