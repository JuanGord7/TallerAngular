import { Component, OnInit } from '@angular/core';
import { Series } from '../series';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  series: Array<Series> = [];
  constructor(private seriesService: SeriesService) { }

  getSeries(): void {
    this.seriesService.getSeries().subscribe((series) => {
      this.series = series;
    });
  }

  ngOnInit() {
    this.getSeries();
  }

  calculateAverageSeasons(): number {
    if (this.series.length === 0) {
      return 0;
    }

    let totalSeasons = 0;
    this.series.forEach((serie) => {
      totalSeasons += serie.seasons;
    });

    return totalSeasons / this.series.length;
  }

}
