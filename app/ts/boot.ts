// Angular Modules
import { bootstrap } from "angular2/platform/browser";
import { provide } from "angular2/core";
import { HTTP_PROVIDERS } from 'angular2/http';

// App
import { Ng2App } from './app.component';

// Routes
import {
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  HashLocationStrategy,
  LocationStrategy,
  Router,
  RouteConfig,
} from 'angular2/router';

// Bootstrap App
bootstrap(Ng2App,
  [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
  ]
);
