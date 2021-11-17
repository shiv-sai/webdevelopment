import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontendComponent } from './frontend/frontend.component';
import { BackendComponent } from './backend/backend.component';
import { FullstackComponent } from './fullstack/fullstack.component';
import { ResourcesComponent } from './resources/resources.component';
import { LearnfromhereComponent } from './resources/learnfromhere/learnfromhere.component';
import { BooksComponent } from './resources/books/books.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontendComponent,
    BackendComponent,
    FullstackComponent,
    ResourcesComponent,
    LearnfromhereComponent,
     BooksComponent,
    PagenotfoundComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
