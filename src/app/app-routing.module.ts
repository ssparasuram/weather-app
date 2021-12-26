import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import {allAppRoutes} from './routes';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(allAppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
