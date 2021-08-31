import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieThumbnail } from './models/MovieThumbnail';
import { SearchData } from './models/SearchData';
import { MovieServService } from './service/movie-serv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChildren('theLastList', {read: ElementRef})
  theLastList: QueryList<ElementRef>;

  // variables for infinite scroll
  private totalResultsString: string;
  private totalResults: number;
  private currentPage: number;

  private observer: any;

  // form
  public formFindMovies: FormGroup;

  // variables for build the query

  private titleString: string;
  private yearString: string;
  private typeString: string;
  public queryString: string;

  // variables for obtain the data of movieService

  private searchDataAny: any;
  private searchData: SearchData;
  public arrayMovieThumnailsResult: MovieThumbnail[] = [];
  public arrayMovieThumnails: MovieThumbnail[] = [];

  constructor(private movieService: MovieServService) {}

  ngAfterViewInit() {
    this.theLastList.changes.subscribe((data) => {
      console.log(data);

      if (data.last) {
        this.observer.observe(data.last.nativeElement);
      }

    });
  }

  ngOnInit() {

    this.titleString = '';
    this.yearString = '';
    this.typeString = '';

    this.queryString = '';

    this.formFindMovies = new FormGroup({
      movieTitleInput: new FormControl(),
      yearInput: new FormControl(),
      typeInput: new FormControl()
    });

    this.totalResults = 0;
    this.currentPage = 1;

    // prueba (despues cambiar a busqueda por el boton)
    // this.queryString = 's=' + 'batman' + '&';
    // this.searchFilms(this.currentPage);
    this.intersectionObserver();
  }

  onSubmit(formValue: any, event) {
    // obtain data from form and configure the query

    this.titleString = formValue.movieTitleInput;
    if (this.titleString === null) {
      this.titleString = '';
    }

    this.yearString = formValue.yearInput;
    if (this.yearString === null) {
      this.yearString = '';
    }

    this.typeString = formValue.typeInput;
    if (this.typeString === null) {
      this.typeString = '';
    }

    if (this.titleString !== '') {
      this.titleString = this.titleString.replace(' ', '+');
      this.titleString = 's=' + this.titleString + '&';
    }

    if (this.yearString !== '') {
      this.yearString = 'y=' + this.yearString + '&';
    }

    if (this.typeString !== '') {
      this.typeString = 'type=' + this.typeString + '&';
    }

    // obtain the query for search the results of the grid in app-app-films-grid
    this.queryString = this.titleString + this.yearString +  this.typeString;

    this.searchFilms(this.currentPage);

  }

  private searchFilms(numberPage: number) {

    this.movieService.getMovieListForInifiniteScroll(this.queryString + 'page=' + numberPage + '&').subscribe(data => {
      this.searchDataAny = data;
      this.searchData = this.searchDataAny;

      this.arrayMovieThumnailsResult = this.searchData.Search;

      // tslint:disable-next-line:prefer-const
      for (let movieThumbnail of this.arrayMovieThumnailsResult) {
        this.arrayMovieThumnails.push(movieThumbnail);
      }

      this.totalResultsString = this.searchData.totalResults;
      this.totalResults = Number(this.totalResultsString);

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
        console.log('Scroll more');

        if (entries[0].isIntersecting) {
          if (this.currentPage < this.totalResults) {
            this.currentPage ++;
            this.searchFilms(this.currentPage);
          }
        }

      }

    }, options);

  }

}
