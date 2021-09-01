import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFilmsGridComponent } from './app-films-grid/app-films-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { FindFilmsComponent } from './find-films/find-films.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MovieServService } from 'src/app/service/movie-serv.service';
import { FilmsDetailsComponent } from './films-details/films-details.component';

@NgModule({
  declarations: [
    AppFilmsGridComponent,
    FindFilmsComponent,
    FilmsDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    AppFilmsGridComponent,
    FindFilmsComponent
  ],
  providers: [MovieServService]
})
export class FilmsGridModule { }
