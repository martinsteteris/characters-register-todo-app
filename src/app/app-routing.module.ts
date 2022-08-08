import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlannerComponent} from "./pages/planner/planner.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {RegisterComponent} from "./pages/register/register.component";
import {CharactersComponent} from "./pages/charactres/characters.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'planner',
    pathMatch: 'full'
  },
  {
    path: 'planner',
    component: PlannerComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
