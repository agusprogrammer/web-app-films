import { Rating } from './Rating';

export class Movie {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string; // for movies and series
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Languaje: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: Rating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string; // for movies
    BoxOffice: string;
    Production: string;
    Website: string;
    totalSeasons: string;
    Response: string;
}
