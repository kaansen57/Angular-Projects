import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BankComponent } from './bank/bank.component';

const routes: Routes = [
    {path:'',component:AppComponent},
    {path:'bank',component:BankComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
