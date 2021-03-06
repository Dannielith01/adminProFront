import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphComponent } from './graph/graph.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuard } from '../services/service.index';
import { ProfileComponent } from './profile/profile.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [LoginGuard],
        children: [
            {path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' }},
            {path: 'progress', component: ProgressComponent, data: { title: 'Progress bar' }},
            {path: 'graph', component: GraphComponent, data: { title: 'Graphs' }},
            {path: 'promises', component: PromisesComponent, data: { title: 'Promises' }},
            {path: 'rxjs', component: RxjsComponent, data: { title: 'RxJs' }},
            {path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Account settings' }},
            {path: 'profile', component: ProfileComponent, data: { title: 'My profile' }},
            {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
