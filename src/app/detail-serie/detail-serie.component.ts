import { Component, OnInit, OnDestroy } from '@angular/core';
import { SerieService } from '../services/serie.service';
import { ActivatedRoute } from '@angular/router';
import Serie from '../types/Serie.type';

@Component({
  selector: 'app-detail-serie',
  templateUrl: './detail-serie.component.html',
  styleUrls: ['./detail-serie.component.css']
})
export class DetailSerieComponent implements OnInit {
  
  serie : Serie;
  id: number;

  constructor(private serieService : SerieService, private route : ActivatedRoute) {
    this.route.params.subscribe(params => this.id = params.id);

  }

  ngOnInit() {
    this.serieService.getSerieById(this.id).subscribe
      (data=>{
        this.serie = data;
      })
  }
}
