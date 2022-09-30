import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Film from '../types/Film.type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http : HttpClient) { }

  getFilms():Observable<Film[]>{
    return this.http.get<Film[]>(`${environment.apiUrl}/movie/top_rated?sort_by=popularity.desc&language=fr-FR&api_key=${environment.apiKey}`);
  }

  getFilmById(id:number):Observable<Film>{
    return this.http.get<Film>(`${environment.apiUrl}/movie/${id}?api_key=${environment.apiKey}&language=fr-FR`);
  }
}
