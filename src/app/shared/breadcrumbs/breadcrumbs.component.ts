import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  route: string;

  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta
  ) {
    this._getDataRoute()
    .subscribe( data => {
      this.route = data.title;
      this.title.setTitle( this.route );

      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.route
      };

      this.meta.updateTag( metaTag );
    });
  }

  private _getDataRoute() {
    return this.router.events
    .filter( event => event instanceof ActivationEnd)
    .filter( (events: ActivationEnd) => events.snapshot.firstChild === null )
    .map( (event: ActivationEnd) => event.snapshot.data );
  }

  ngOnInit() {
  }

}
