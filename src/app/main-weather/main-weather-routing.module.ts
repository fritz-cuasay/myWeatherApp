import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainWeatherPage } from './main-weather.page';

const routes: Routes = [
  {
    path: '',
    component: MainWeatherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainWeatherPageRoutingModule {}
