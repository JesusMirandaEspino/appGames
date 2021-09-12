import { Component, OnInit, ViewChild,  ElementRef, Renderer2, AfterViewInit } from '@angular/core';
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
  @ViewChild("element", { static: false }) element: ElementRef;


  constructor(  private getGamesServices: GetallgameService  ) { }




  ngOnInit(): void {

    this.getGamesServices.getGames().subscribe( ( games ) => {

      this.games = games;

      this.listGames = this.games.results;

      console.log(  this.listGames );


      console.log( this.element );



    } );





  }


  ngAfterViewInit(){

      if( this.listGames.length > 0 ){

        console.log( this.element );

      }else{
        console.log( 'Aun no estan cargados los elementos' );
      }
  }


  selectelement() {



  }

}
