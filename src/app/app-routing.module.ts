import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListMoviesComponent} from "./list-movies/list-movies.component";
import {DetailProductComponent} from "./detail-product/detail-product.component";

const routes: Routes = [{path:'', component:ListMoviesComponent},
  {path: 'details/:id' , component: DetailProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
