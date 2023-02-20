import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  API_TOKEN :any= "453573ed608b6412b9b3c9f7faad6864";
  //API_TOKEN :any= "8a2af15238f90718d584793802c2b2f4";
   url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + this.API_TOKEN


  //url :string = 'https://api.themoviedb.org/3/movie/550?api_key=453573ed608b6412b9b3c9f7faad6864';

  constructor(private http :HttpClient) {}
  getMovies(){
    return  this.http.get<any>(this.url)
  }
}
