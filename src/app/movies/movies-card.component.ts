import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../shared/interfaces';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movies-card.component.html',
  styleUrls: ['./movies-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: IMovie;

  constructor() { }

  ngOnInit() {
  }

}
