import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackendComponent } from './backend/backend.component';
import { FrontendComponent } from './frontend/frontend.component';
import { FullstackComponent } from './fullstack/fullstack.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BooksComponent } from './resources/books/books.component';
import { LearnfromhereComponent } from './resources/learnfromhere/learnfromhere.component';
import { ResourcesComponent } from './resources/resources.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'frontend',component:FrontendComponent},
  {path:'backend',component:BackendComponent},
  {path:'fullstack',component:FullstackComponent},
  {path:'resources',component:ResourcesComponent,children:[
  {path:'learn',component:LearnfromhereComponent},
  {path:'book',component:BooksComponent}]},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'home',pathMatch:"full"},
   {path:'**',component:PagenotfoundComponent}
]; 
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
