import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryCreatorComponent } from './country-creator/country-creator.component';
import { IndustryComponent } from './industry/industry.component';
import { OperationsComponent } from './operations/operations.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'country-creator',
    pathMatch: 'full'
  },
  {
    path: 'industry',
    component: IndustryComponent,
    // canDeactivate: [DirtyTracking],
    // data: { formName: 'accountProfile' },
    // resolve: {
    //     accountFormInstanceId: AccountFormResolverService
    // }
  },
  {
    path: 'training',
    component: TrainingComponent,
  },
  {
    path: 'operations',
    component: OperationsComponent,
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
  },
  {
    path: 'country-creator',
    component: CountryCreatorComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
