import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { RegisterComponent } from './login/register.component';

const APP_ROUTE:Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: NotFoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot(APP_ROUTE, {useHash: true});
