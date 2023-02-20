import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import {HttpClientModule} from "@angular/common/http";
import { MovieItemComponent } from './movie-item/movie-item.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {FormsModule} from "@angular/forms";
import { DetailProductComponent } from './detail-product/detail-product.component';
import {Routes} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    ListMoviesComponent,
    MovieItemComponent,
    DetailProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
