import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieThumbnail } from 'src/app/models/MovieThumbnail';
import { SearchData } from 'src/app/models/SearchData';
import { MovieServService } from 'src/app/service/movie-serv.service';

@Component({
  selector: 'app-app-films-grid',
  templateUrl: './app-films-grid.component.html',
  styleUrls: ['./app-films-grid.component.css']
})
export class AppFilmsGridComponent implements OnInit {

  @Input()
  public searchQueryString: string;

  // @Input()
  public arrayMovieThumnailsGrid: MovieThumbnail[] = [];

  // @Input()
  // public contGrid: number;

  // variables for the next component
  // public searchQueryStringNext: string;
  // public arrayMovieThumnailsNextGrid: MovieThumbnail[] = [];
  // public contNext: number;

  // Variables for obtain the list of movies

  private searchDataAny: any;
  private searchData: SearchData;
  public showButtonMoreResults: boolean; // boolean used for show the more results button

  constructor(private movieService: MovieServService) { }

  ngOnInit() {
    this.showButtonMoreResults = true;
  }

  public nextResults() {

    // this.contGrid = this.contGrid + 1;
    // this.searchQueryString += 'page=' + this.contGrid + '&';

    this.movieService.getMovieList(this.searchQueryString).subscribe(data => {
      this.searchDataAny = data;
      this.searchData = this.searchDataAny;

      // obtain data for te next component
      /*
      this.searchQueryStringNext = this.searchQueryString;
      this.arrayMovieThumnailsNextGrid = this.searchData.Search;
      this.contNext = this.contGrid;
      */

      // disable the last button
      // this.showButtonMoreResults = false;

    });

  }

}
