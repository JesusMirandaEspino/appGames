import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError }  from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetallgameService {


  private url: string = 'https://api.rawg.io/api/games';
  page: number = 2;
  page_size: number = 2 ;
  count: number = 2;



  constructor(  private http: HttpClient  ) {  }


    get params(){
      return {
        key: '9a0493ac96bd473ea8297c8f2ad91efb',
        page: this.page.toString(),
        page_size: this.page_size.toString(),
        count: this.count.toString()
      }
    }


    getGames (){

      return this.http.get( `${this.url}`, { params: this.params } )
      .pipe( map(  (resp )  => resp )  );

    }




}
