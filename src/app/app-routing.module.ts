import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Poland1Component } from './poland1/poland1.component';
import { BelarusComponent } from './belarus/belarus.component';




const routes: Routes = [
  { path: 'poland1', component: Poland1Component },
  { path: 'belarus', component: BelarusComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
