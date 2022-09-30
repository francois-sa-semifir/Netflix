import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import { ActivatedRoute } from '@angular/router';
import Film from '../types/Film.type';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css']
})
export class DetailFilmComponent implements OnInit {

  id: number;
  film: Film;

  constructor(private filmService: FilmService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.id = params.id);

  }

  ngOnInit() {
    this.filmService.getFilmById(this.id)
      .subscribe(data => {
        this.film = data;
      });
  }

}
