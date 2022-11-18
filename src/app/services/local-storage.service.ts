import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  save(key: string, value: any) {
    let json = JSON.stringify(value);
    localStorage.setItem(key, json);
  }

  isSaved(key: string): boolean {
    if (!localStorage.getItem(key)) {
      return false;
    }
    return true;
  }

  get(key: string): any {
    let json = localStorage.getItem(key);
    let value = JSON.parse(json);
    return value;
  }

  getWithType<T>(key: string): T {
    let json = localStorage.getItem(key);
    let value: T = Object.assign({}, JSON.parse(json));
    return value;
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  removeAll() {
    localStorage.clear();
  }
}
