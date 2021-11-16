import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/Movie';
import { MovieServService } from 'src/app/service/movie-serv.service';

@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.component.html',
  styleUrls: ['./films-details.component.css']
})
export class FilmsDetailsComponent implements OnInit {

  public searchQueryString: string;
  private searchQueryStringBack: string;

  public resultsNotFound: boolean;
  public searchDataAny: any;
  private movie: Movie;
  private noImgSrc: string;
  public arrayMovie: Movie[] = [];
  public showMoreData: boolean;
  public buttonStateString: string;

  constructor(private routeActivate: ActivatedRoute, private movieService: MovieServService, private router: Router) { }

  ngOnInit() {

    this.searchQueryString = this.routeActivate.snapshot.paramMap.get('imdbID');
    this.searchQueryStringBack = this.routeActivate.snapshot.paramMap.get('searchQueryBack');
    this.showMoreData = false;
    this.resultsNotFound = false;
    this.buttonStateString = 'Show more';
    this.noImgSrc = 'assets/public/img/no-imag.jpg';
    this.searchDataDetail();

  }

  private searchDataDetail() {

    this.movieService.getMovieByID(this.searchQueryString + '&').subscribe(data => {
      this.searchDataAny = data;
      this.movie = data;

      if (this.searchDataAny.Response === 'False') {
        this.resultsNotFound = true;
      }

      if ('' === this.movie.Poster || 'N/A' === this.movie.Poster || undefined === this.movie.Poster) {
        this.movie.Poster = this.noImgSrc;
      }

      this.arrayMovie.push(this.movie);
    });

  }

  public showMore() {

    if (this.showMoreData === false) {
      this.showMoreData = true;
      this.buttonStateString = 'Show less';
    } else {
      this.showMoreData = false;
      this.buttonStateString = 'Show more';
    }
  }

  public backButton() {
    this.router.navigate(['home/appfilms/gridlist/' + this.searchQueryStringBack]);
  }

}
