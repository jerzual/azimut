import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

if (environment.production) {
	enableProdMode();
}else {
	import('@ngneat/elf-devtools').then(m => m.devTools());
}

bootstrapApplication(AppComponent, appConfig).catch((err) =>
	console.error(err),
);
