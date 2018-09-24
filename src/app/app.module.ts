import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import {chart} from 'chart.js';

import { AppComponent } from './app.component';
import {RestService} from './services/rest.service';
import { ChartComponent } from './chart/chart.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import {InstanceCountService} from './services/instanceCount.service';
import {HttpClientModule} from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import {CompletedDownloadsService} from './services/completedDownloads.service';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeatmapComponent } from './heatmap/heatmap.component';
import {HeatMapService} from './services/heatmap.service';
import { CurrentSprintComponent } from './current-sprint/current-sprint.component';
import {CurrentSprintService} from './services/currentSprint.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RelabelSprintComponent } from './relabel-sprint/relabel-sprint.component';
import { RelabelSprintService } from './services/relabelSprint.service';
import {ProjectService} from './services/projects.services';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { AddProjectComponent } from './add-project/add-project.component';




@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    AppNavbarComponent,
    HeatmapComponent,
    CurrentSprintComponent,
    SidebarComponent,
    RelabelSprintComponent,
    AddProjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    NgxPaginationModule,
    Ng2OrderModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    BootstrapModalModule.forRoot({container: document.body}),
    NgBootstrapFormValidationModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [
    RestService,
    InstanceCountService,
    CompletedDownloadsService,
    HeatMapService,
    CurrentSprintService,
    RelabelSprintService,
    ProjectService
  ],
  entryComponents: [
    AddProjectComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
