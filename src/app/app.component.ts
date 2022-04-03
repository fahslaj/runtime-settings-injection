import { Component, Inject } from '@angular/core';
import { MyApiService, Todo } from './my-api.service';
import { AppSettings, APP_SETTINGS } from './settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'runtime-settings-injection';
  result: Todo | null = null;

  constructor(
    @Inject(APP_SETTINGS) public readonly settings: AppSettings,
    private readonly _myApiService: MyApiService
  ) {}

  callApi() {
    this._myApiService.getMyResource().subscribe((r) => (this.result = r));
  }
}
