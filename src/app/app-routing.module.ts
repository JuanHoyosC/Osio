import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component'
import { RestauranteComponent } from '../app/components/restaurante/restaurante.component';
const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'restaurante/:id', component:  RestauranteComponent },
    { path: '**', pathMatch: 'full', redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
