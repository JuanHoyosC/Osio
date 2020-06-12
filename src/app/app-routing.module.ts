import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component'
import { RestauranteComponent } from '../app/components/restaurante/restaurante.component';
import { RestaurantesComponent } from '../app/components/restaurantes/restaurantes.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'restaurantes', component: RestaurantesComponent },
    { path: 'restaurante/:id', component:  RestauranteComponent },
    { path: '**', pathMatch: 'full', redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
