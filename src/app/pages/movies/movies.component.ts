import { iMovies } from './../../models/i-movies';
import { Component } from '@angular/core';

import { iUser } from '../../models/i-user';
import { MoviesService } from '../../service/movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {

  movies: iMovies[] = [];
  user: iUser | undefined;

  constructor(
    private movieSvc: MoviesService,
   ) {}

    ngOnInit(){
      this.movieSvc.getAllMovies().subscribe(movies => {
        this.movies = movies;
      console.log(this.movies)

      });






}

toggleFavourite(movie:iMovies){
  this.movieSvc.toggleFavourite(movie);





}
}
