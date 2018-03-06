import { NgModule } from '@angular/core';

// Modules
import { SharedModule } from '../shared/shared.module';

// Routes
import { PAGES_ROUTES } from './pages.routes';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphComponent } from './graph/graph.component';
import { PagesComponent } from './pages.component';

@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        GraphComponent,
        PagesComponent,
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        GraphComponent,
        PagesComponent,
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule { }
