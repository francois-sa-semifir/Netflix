import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Serie from '../types/Serie.type';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private http : HttpClient) { }

  getSeries():Observable<any[]>{
    return this.http.get<any[]>("https://api.themoviedb.org/3/discover/tv?api_key=87dfa1c669eea853da609d4968d294be&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&api_key=87dfa1c669eea853da609d4968d294be");
  }


  getSerieById(id : number):Observable<Serie>{
    return this.http.get<Serie>("https://api.themoviedb.org/3/tv/"+ id +"?api_key=87dfa1c669eea853da609d4968d294be&language=fr-FR");
  }
}
