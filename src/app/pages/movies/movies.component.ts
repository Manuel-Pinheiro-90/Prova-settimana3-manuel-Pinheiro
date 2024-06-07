import { Component } from '@angular/core';
import { iMovies } from '../../models/i-movies';
import { iUser } from '../../models/i-user';
import { MoviesService } from '../../service/movies.service';
import { AuthService } from '../auth/auth.service';

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
}
