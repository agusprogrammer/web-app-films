import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren, QueryList } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieThumbnail } from './models/MovieThumbnail';
import { SearchData } from './models/SearchData';
import { MovieServService } from './service/movie-serv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {

  }

}
