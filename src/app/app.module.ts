import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { FilmsGridModule } from './components/films-grid/films-grid.module';
import { MovieServService } from './service/movie-serv.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FilmsGridModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MovieServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
