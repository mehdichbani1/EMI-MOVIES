import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {MovieService} from "../movie.service";
import {Movie} from "../Movie";

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {
  listmovies !: Movie[];

  movies = new MovieService(this.http);
  getMovies=()=>{
    this.movies.getMovies().subscribe(data => {
      this.listmovies=data.results;
    });
  }
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    this.getMovies();
  }
  searchText='';
}
