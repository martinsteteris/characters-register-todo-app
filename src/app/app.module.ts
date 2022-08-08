import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlannerComponent } from './pages/planner/planner.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { HeaderComponent } from './shared/components/header/header.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CharactersComponent } from './pages/charactres/characters.component';
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from 'ngx-pagination'

@NgModule({
  declarations : [
    AppComponent,
    PlannerComponent,
    PageNotFoundComponent,
    RegisterComponent,
    HeaderComponent,
    CharactersComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
      HttpClientModule,
      NgxPaginationModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
