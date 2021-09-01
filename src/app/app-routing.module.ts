import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppFilmsGridComponent } from './components/films-grid/app-films-grid/app-films-grid.component';
import { FindFilmsComponent } from './components/films-grid/find-films/find-films.component';
import { FilmsDetailsComponent } from './components/films-grid/films-details/films-details.component';

/*
const appRoutes: Routes = [
{
  path: '',   // blank route example: urlserver/
  pathMatch: 'full',
  redirectTo: 'home/appfilms'
},
{
  path: '**', // other routes go to urlserver/home/appfilms
  redirectTo: 'home/appfilms'
},
{
  path: 'home/appfilms', component: FindFilmsComponent
},
{
  path: 'home/appfilms/gridlist', component: AppFilmsGridComponent
}];
*/

const appRoutes: Routes = [
  {path: 'home/appfilms', component: FindFilmsComponent},
  {path: 'home/appfilms/gridlist/:searchQuery', component: AppFilmsGridComponent},
  {path: 'home/appfilms/filmdetails', component: FilmsDetailsComponent},
  {path: 'home/appfilms/filmdetails/:searchQueryDetail', component: FilmsDetailsComponent},
  {path: '**', redirectTo: 'home/appfilms'}
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
