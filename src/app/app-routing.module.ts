import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PostDetailsComponent } from './home/post-details/post-details.component';  // Importuj komponentu

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }, 
  { path: 'home', component: HomeComponent }, 
  { path: 'post/:id', component: PostDetailsComponent } // Ruta za objavu
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
