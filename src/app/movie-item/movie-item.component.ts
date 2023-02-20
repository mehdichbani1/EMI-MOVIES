import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {

  @Input() titre!: string ;
  @Input() Id!: number;
  @Input() image!: string;
  @Input() VoteAvg !: number;
  constructor() {
  }
  ngOnInit(){

  }
}
