import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppSettings, APP_SETTINGS } from './settings';
import { SettingsService } from './settings.service';

const appSettingsInitializer = (settingsService: SettingsService) => () =>
  settingsService.initialize();

const appSettingsFactory = (settingsService: SettingsService): AppSettings =>
  settingsService.settings;

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appSettingsInitializer,
      deps: [SettingsService],
      multi: true,
    },
    {
      provide: APP_SETTINGS,
      useFactory: appSettingsFactory,
      deps: [SettingsService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
