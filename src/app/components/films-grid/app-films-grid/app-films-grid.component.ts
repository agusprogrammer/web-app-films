import { Component, AfterViewInit, OnInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { MovieThumbnail } from 'src/app/models/MovieThumbnail';
import { SearchData } from 'src/app/models/SearchData';
import { MovieServService } from 'src/app/service/movie-serv.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-app-films-grid',
  templateUrl: './app-films-grid.component.html',
  styleUrls: ['./app-films-grid.component.css']
})
export class AppFilmsGridComponent implements OnInit, AfterViewInit {
  @ViewChildren('theLastList', {read: ElementRef})
  theLastList: QueryList<ElementRef>;

  // variables for infinite scroll
  private totalResultsString: string;
  private totalResults: number;
  private currentPage: number;

  private observer: any;

  // variable for obtain the search query
  public searchQueryString: string;

  // Variables for obtain the list of movies
  public arrayMovieThumnailsGrid: MovieThumbnail[] = [];
  public arrayMovieThumnailsResult: MovieThumbnail[] = [];
  public searchDataAny: any;
  private searchData: SearchData;
  private noImgSrc: string;

  public resultsNotFound: boolean;
  private dataNotFound: boolean;

  constructor(private movieService: MovieServService, private routeActivate: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    // obtain the search query from url
    this.searchQueryString = this.routeActivate.snapshot.paramMap.get('searchQuery');

    // initialize variables
    this.totalResults = 0;
    this.currentPage = 1;
    this.noImgSrc = 'assets/public/img/no-imag.jpg';
    this.resultsNotFound = false;
    this.dataNotFound = true;

    this.searchFilms(this.currentPage);
    this.intersectionObserver();
  }

  ngAfterViewInit() {
    this.theLastList.changes.subscribe((data) => {
      if (data.last) {
        this.observer.observe(data.last.nativeElement);
      }

    });
  }

  intersectionObserver() {
    // tslint:disable-next-line:prefer-const
    let options = {
      root: null,
      rootMargin: '0px',
      thereshold: 1.0
    };

    // tslint:disable-next-line:prefer-const
    this.observer = new IntersectionObserver((entries) => {

      if (entries[0].isIntersecting) {

        if (this.currentPage < this.totalResults) {
          this.currentPage ++;
          this.searchFilms(this.currentPage);
        }

      }

    }, options);

  }

  private searchFilms(numberPage: number) {

    this.movieService.getMovieListForInifiniteScroll(this.searchQueryString + 'page=' + numberPage + '&').subscribe(data => {
      this.searchDataAny = data;

      this.searchData = this.searchDataAny;

      if (this.searchData.Response === 'True') {
        this.dataNotFound = false;
        this.arrayMovieThumnailsResult = this.searchData.Search;

        // tslint:disable-next-line:prefer-const
        for (let movieThumbnail of this.arrayMovieThumnailsResult) {

          if ('' === movieThumbnail.Poster || 'N/A' === movieThumbnail.Poster || undefined === movieThumbnail.Poster) {
            movieThumbnail.Poster = this.noImgSrc;
          }

          this.arrayMovieThumnailsGrid.push(movieThumbnail);
        }

        this.totalResultsString = this.searchData.totalResults;
        this.totalResults = Number(this.totalResultsString);
      }

      if (this.dataNotFound === true) {
        this.resultsNotFound = true;
      }
      /*
      if (this.searchData.Response === 'False') {

        if (this.resultsNotFound === true) {
          this.resultsNotFound = true;
        }
      }
      */

    });

  }

  public backButton() {
    this.router.navigate(['home/appfilms']);
  }

}

