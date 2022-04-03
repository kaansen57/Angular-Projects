import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BasketComponent } from './basket/basket.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {path:'',component:HomeComponent,redirectTo:'/',pathMatch:'full'},
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'detail',component:DetailComponent},
  {path:'basket',component:BasketComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
