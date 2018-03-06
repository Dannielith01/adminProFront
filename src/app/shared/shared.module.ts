import { NgModule } from '@angular/core';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedComponent } from './shared.component';


@NgModule({
    declarations: [
        BreadcrumbsComponent,
        HeaderComponent,
        NotFoundComponent,
        SharedComponent,
        SidebarComponent
    ],
    exports: [
        BreadcrumbsComponent,
        HeaderComponent,
        NotFoundComponent,
        SharedComponent,
        SidebarComponent
    ]
})

export class SharedModule { }
