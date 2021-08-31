import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServService {

  private keyOmdbApi: string;

  constructor(private http: HttpClient) {
    this.keyOmdbApi = 'apikey=6d1d7266';
  }

  public getMovieByID(movieID: string): Observable<any> {
    return this.http.get('http://www.omdbapi.com/?i=' + movieID + this.keyOmdbApi);
  }

  // for 10 results
  public getMovieList(searchQuery: string): Observable<any> {
    return this.http.get('http://www.omdbapi.com/?' + searchQuery + this.keyOmdbApi);
  }

  // for infinite scroll (usar el de arriba si se queda igual)
  public getMovieListForInifiniteScroll(searchQuery: string): Observable<any> {
    return this.http.get('http://www.omdbapi.com/?' + searchQuery + this.keyOmdbApi);
  }

}

