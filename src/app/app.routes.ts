import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { ProgressComponent } from "./pages/progress/progress.component";
import { GraphComponent } from "./pages/graph/graph.component";
import { NotFoundComponent } from "./shared/not-found/not-found.component";
import { RegisterComponent } from './login/register.component';

const APP_ROUTE:Routes = [
    {
        path: '', 
        component: PagesComponent,
        children: [
            {path: 'dashboard', component: DashboardComponent},
            {path: 'progress', component: ProgressComponent},
            {path: 'graph', component: GraphComponent},
            {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
        ]
    },
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: NotFoundComponent}
]

export const APP_ROUTES = RouterModule.forRoot(APP_ROUTE, {useHash: true});