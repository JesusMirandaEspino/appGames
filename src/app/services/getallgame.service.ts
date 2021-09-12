import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError }  from 'rxjs/operators';
import { GameList } from 'src/app/interfaces/listGames';

@Injectable({
  providedIn: 'root'
})
export class GetallgameService {


  private url: string = 'https://api.rawg.io/api/games';
  page: number = 12;
  page_size: number = 12;
  count: number = 12;



  constructor(  private http: HttpClient  ) {  }


    get params(){
      return {
        key: '9a0493ac96bd473ea8297c8f2ad91efb',
        page: this.page.toString(),
        page_size: this.page_size.toString(),
        count: this.count.toString()
      }
    }


    getGames():Observable<GameList>{

      return this.http.get<GameList>( `${this.url}`, { params: this.params } )
      .pipe( map(  (results )  => results )  );

    }




}
