import {Component, EventEmitter, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../movie.service";
import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs";
import {Movie} from "../Movie";

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
  movies = new MovieService(this.http);
  listmovies !: Movie[] ;
  constructor(private http: HttpClient,private route: ActivatedRoute) {
  }


  movieId:number = 0;
  ngOnInit() {
    this.getMovies();
    this.movieId= this.route.snapshot.params['id'];
  }
  getMovies=()=>{
    this.movies.getMovies().subscribe(data => {
      this.listmovies=data.results;
    });
  }
}
