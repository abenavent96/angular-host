import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Storage {

  private supported: any = null;

  get(key: string) {
    if (!this.isSupported()) { return; }
    const value = window.localStorage.getItem(key);
    if (value == null || value === 'null') { return null; }
    return window.localStorage.getItem(key);
  }

  set(key: string, value: string) {
    if (!this.isSupported()) { return; }
    if (value == null) {
      this.remove(key);
    } else {
      window.localStorage.setItem(key, value);
    }
  }

  remove(key: string) {
    if (!this.isSupported()) { return; }
    window.localStorage.removeItem(key);
  }

  private isSupported() {
    if (this.supported !== null) {
      return this.supported;
    } else {
      try {
        localStorage.setItem('testStorage', '');
        localStorage.removeItem('testStorage');
        this.supported = true;
      } catch (e) {
        this.supported = false;
      }
      return this.supported;
    }
  }

}
