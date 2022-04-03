import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AppSettings, APP_SETTINGS } from './settings';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class MyApiService {
  private url: string;

  constructor(
    @Inject(APP_SETTINGS) settings: AppSettings,
    private readonly _httpClient: HttpClient
  ) {
    this.url = settings.apiUrl + '/todos';
  }

  getMyResource() {
    const id = Math.floor(Math.random() * 200 + 1);
    return this._httpClient.get<Todo>(this.url + '/' + id);
  }
}
