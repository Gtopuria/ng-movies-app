import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieActions } from './movie.actions';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { IMovie } from '../shared/interfaces';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @select('activeMovie') activeMovie$: Observable<IMovie>;
  constructor(private route: ActivatedRoute, private movieActions: MovieActions) { }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      const id = +params['id'];
      this.movieActions.getMovie(id);
    });
  }



}
