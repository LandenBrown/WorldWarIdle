import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { IndustryComponent } from './industry/industry.component';
import { OperationsComponent } from './operations/operations.component';
import { TrainingComponent } from './training/training.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CountryCreatorComponent } from './country-creator/country-creator.component';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndustryComponent,
    OperationsComponent,
    TrainingComponent,
    StatisticsComponent,
    CountryCreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule
  ],
  providers: [Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
