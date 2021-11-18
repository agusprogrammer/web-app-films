import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppFilmsGridComponent } from './components/films-grid/app-films-grid/app-films-grid.component';
import { FindFilmsComponent } from './components/films-grid/find-films/find-films.component';
import { FilmsDetailsComponent } from './components/films-grid/films-details/films-details.component';

const appRoutes: Routes = [
  {path: '', component: FindFilmsComponent},
  {path: 'gridlist/:searchQuery', component: AppFilmsGridComponent},
  {path: 'gridlist/filmdetails/:imdbID/:searchQueryBack', component: FilmsDetailsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
