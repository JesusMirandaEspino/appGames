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
  page: number = 24;
  page_size: number = 24;
  count: number = 24;
  key = '9a0493ac96bd473ea8297c8f2ad91efb';


  constructor(  private http: HttpClient  ) {  }


    get params(){
      return {
        key: this.key,
        page: this.page.toString(),
        page_size: this.page_size.toString(),
        count: this.count.toString()
      }
    }

    getGames():Observable<GameList>{

      return this.http.get<GameList>( `${this.url}`, { params: this.params } )
      .pipe( map(  (results )  => results )  );

    }


    searchGame(buscar:string):Observable<GameList>{
      return this.http.get<GameList>( `${this.url}?search=${buscar}`, { params: this.params } )
      .pipe( map(  (results )  => results )  );

    }




}
