import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Serie from '../types/Serie.type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private http : HttpClient) { }

  getSeries():Observable<Serie[]>{
    return this.http.get<Serie[]>(`${environment.apiUrl}/discover/tv?language=fr-FR&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&api_key=${environment.apiKey}`);
  }


  getSerieById(id : number):Observable<Serie>{
    return this.http.get<Serie>(`${environment.apiUrl}/tv/${id}?api_key=${environment.apiKey}&language=fr-FR`);
  }
}
