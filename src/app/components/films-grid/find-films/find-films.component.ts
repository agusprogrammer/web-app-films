import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-films',
  templateUrl: './find-films.component.html',
  styleUrls: ['./find-films.component.css']
})
export class FindFilmsComponent implements OnInit {

  // form
  public formFindMovies: FormGroup;

  // variables for build the query
  private titleString: string;
  private yearString: string;
  private typeString: string;
  public queryString: string;

  constructor(private router: Router) { }

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

    // this.searchFilms(this.currentPage);
    this.router.navigate(['home/appfilms/gridlist', this.queryString]);
  }

}
