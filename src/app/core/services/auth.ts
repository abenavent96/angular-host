import { Injectable } from '@angular/core';
import { Storage } from './storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string | null | undefined = null;
  readonly TOKEN_STORAGE_KEY = 'poc_mfe_token_key';

  constructor(
    private storage: Storage
  ) {}

  isAuthenticated() {
    return this.token != null;
  }

  storeToken() {
    console.log('store token');
    this.token = this.storage.get(this.TOKEN_STORAGE_KEY);
    console.log(this.token);
  }

  onLogout() {
    this.token = null;
    this.storage.remove(this.TOKEN_STORAGE_KEY);
  }

}