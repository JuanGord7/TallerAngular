import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesListComponent } from './series-list/series-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SeriesListComponent],
  declarations: [SeriesListComponent]
})
export class SeriesModule { }
