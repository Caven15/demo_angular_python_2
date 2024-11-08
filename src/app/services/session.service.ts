import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private readonly TOKEN_KEY = 'authToken'

  // Signal pour suivre l'état d'authentification
  authStatus = signal<boolean>(this.estConnecte())

  private storageDispo() : boolean{
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined'
  }

  getToken(): string | null{
    return this.storageDispo() ? localStorage.getItem(this.TOKEN_KEY) : null
  }

  // SetToken
  setToken(token : string) : void {
    if (this.storageDispo()) {
      localStorage.setItem(this.TOKEN_KEY, token)
      this.authStatus.set(true)
    }
  }

  // removeToken
  removeToken() : void {
    if (this.storageDispo()) {
      localStorage.removeItem(this.TOKEN_KEY)
      this.authStatus.set(false)
    }
  }

  // estConnecte
  estConnecte() : boolean {
    return !!this.getToken()
  }
}
