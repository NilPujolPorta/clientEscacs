import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaulellComponent } from './Project/Components/taulell/taulell.component';

const routes: Routes = [
  {
    path: 'taulell',
    component: TaulellComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
