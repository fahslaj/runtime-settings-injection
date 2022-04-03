import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppSettings } from './settings';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private readonly _httpClient: HttpClient;
  private _settings: AppSettings | null = null;

  get settings(): AppSettings {
    if (!this._settings) {
      throw new Error('Cannot use settings before they are initialized');
    }
    return this._settings;
  }

  constructor(httpBackend: HttpBackend) {
    this._httpClient = new HttpClient(httpBackend);
  }
  initialize(): Observable<AppSettings> {
    return this._httpClient
      .get<AppSettings>('assets/settings.json')
      .pipe(tap((settings) => (this._settings = settings)));
  }
}
