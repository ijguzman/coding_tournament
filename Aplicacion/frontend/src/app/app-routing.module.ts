import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReportarDelitoComponent }      from './reportar-delito/reportar-delito.component';
import { HomeComponent }      from './home/home.component';
const routes: Routes = [
  { path: 'reportar-delito', component: ReportarDelitoComponent},
  { path: 'home', component: HomeComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: [],
  providers:[]
})
export class AppRoutingModule { }
