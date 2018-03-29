import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Modules
import { SharedModule } from '../shared/shared.module';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { PipesModule } from '../pipes/pipes.module';

// Routes
import { PAGES_ROUTES } from './pages.routes';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphComponent } from './graph/graph.component';
import { PagesComponent } from './pages.component';

// Temporal
import { IncrementerComponent } from '../components/incrementer/incrementer.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        GraphComponent,
        PagesComponent,
        IncrementerComponent,
        AccountSettingsComponent,
        PromisesComponent,
        RxjsComponent,
        ProfileComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        GraphComponent,
        PagesComponent,
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        PipesModule,
    ]
})

export class PagesModule { }
