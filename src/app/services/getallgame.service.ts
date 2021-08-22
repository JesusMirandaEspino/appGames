import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetallgameService {


  url: string = 'https://api.rawg.io/api/games?key=';
  key: string = '9a0493ac96bd473ea8297c8f2ad91efb';
  page: string = '2';
  page_size: string = '2' ;
  count: string = '2';



  constructor() { }
}
