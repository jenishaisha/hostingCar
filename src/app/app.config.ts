import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideIcons } from '@ng-icons/core';
import { bootstrapList } from '@ng-icons/bootstrap-icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    provideIcons({ bootstrapList })
  ]
};
