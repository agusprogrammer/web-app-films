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
  private searchDataAny: any;
  private searchData: SearchData;

  constructor(private movieService: MovieServService, private routeActivate: ActivatedRoute, private router: Router) { }

  ngAfterViewInit() {
    this.theLastList.changes.subscribe((data) => {
      // console.log(data);

      if (data.last) {
        this.observer.observe(data.last.nativeElement);
      }

    });
  }

  ngOnInit() {

    // obtain the search query from url
    this.searchQueryString = this.routeActivate.snapshot.paramMap.get('searchQuery');

    this.totalResults = 0;
    this.currentPage = 1;

    this.searchFilms(this.currentPage);
    this.intersectionObserver();
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

      this.arrayMovieThumnailsResult = this.searchData.Search;

      // tslint:disable-next-line:prefer-const
      for (let movieThumbnail of this.arrayMovieThumnailsResult) {
        this.arrayMovieThumnailsGrid.push(movieThumbnail);
      }

      this.totalResultsString = this.searchData.totalResults;
      this.totalResults = Number(this.totalResultsString);

    });
  }

  public viewDetailsFilm($event, idFilm: string) {
    console.log(idFilm);
  }

}
