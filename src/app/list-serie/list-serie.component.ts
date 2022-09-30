import { Component, OnInit } from '@angular/core';
import { SerieService } from '../services/serie.service';
import Serie from '../types/Serie.type';

@Component({
  selector: 'app-list-serie',
  templateUrl: './list-serie.component.html',
  styleUrls: ['./list-serie.component.css']
})
export class ListSerieComponent implements OnInit {

  constructor(private serieService : SerieService) { }

  series: Serie[];

  ngOnInit() {
    this.serieService.getSeries().subscribe(data => this.series = data["results"])
  }

}
