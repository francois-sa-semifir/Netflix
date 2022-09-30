import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Subscription } from 'rxjs';
import Film from '../types/Film.type';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.css']
})
export class ListFilmComponent implements OnInit, OnDestroy {

  constructor(private filmService: FilmService) { }

  films: Film[];
  filmSub: Subscription;

  ngOnInit() {
    this.filmSub = this.filmService.getFilms().subscribe(data => this.films = data['results']);
  }

  ngOnDestroy() {
    if (this.filmSub) {
      this.filmSub.unsubscribe();
    }
  }

}
