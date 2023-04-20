import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

import { WindowService } from './core/services/window.service';

@NgModule({
	imports: [
		// The AppServerModule should import your AppModule followed
		// by the ServerModule from @angular/platform-server.
		AppModule,
		ServerModule,
	],
	// Since the bootstrapped component is not inherited from your
	// imported AppModule, it needs to be repeated here.
	bootstrap: [AppComponent],
	providers: [
		{
			provide: WindowService,
			useClass: WindowService,
		},
	],
})
export class AppServerModule {}
