import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
    declarations: [
        DashboardComponent
    ],
    
    imports: [
        CommonModule,
        CommonModule,
        DashboardRoutingModule


    ]
})
export class DashboardModule { }
