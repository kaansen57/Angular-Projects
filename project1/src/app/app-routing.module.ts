import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { NoteComponent } from './note/note.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'note/add',component:NoteComponent},
  {path:'note/:id',component:NoteComponent},
  {path:'detail/:id',component:DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
