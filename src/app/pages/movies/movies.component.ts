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
  favourite: boolean = false; //-non funziona, o meglio li cambia tutti(giustamente facendolo cosi)...aggiusterò quando avrò più tempo.
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
  this.favourite = !this.favourite;




}
}
