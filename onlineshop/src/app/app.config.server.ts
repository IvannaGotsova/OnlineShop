import { provideRouter } from '@angular/router';
import { provideServerRendering } from '@angular/platform-server';
import { routes } from './app.routes';

export const config = {
  providers: [
    provideRouter(routes),
    provideServerRendering() 
  ]
};
