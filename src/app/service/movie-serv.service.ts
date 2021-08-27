import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieServService {

  private keyOmdbApi: string;

  constructor(private http: HttpClient) {
    this.keyOmdbApi = '&apikey=6d1d7266';
  }

  getMovieByID(movieID: string) {
    return this.http.get('http://www.omdbapi.com/?i=' + movieID + this.keyOmdbApi);
  }

  getMovieList(searchQuery: string) {
    return this.http.get('http://www.omdbapi.com/?s=' + searchQuery + this.keyOmdbApi);
  }

}
