import { Injectable } from '@angular/core';
import { environement } from '../../../environement';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from '../../models/utilisateur.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // recherche mon url api
  private _apiUrl = `${environement.apiUrl}/auth`

  constructor(private _http : HttpClient){}

  // login
  login(user : Utilisateur) : Observable<any>{
    return this._http.post<Utilisateur>(`${this._apiUrl}/login`, user)
  }

  // register
  register(user : Utilisateur) : Observable<any>{
    return this._http.post<Utilisateur>(`${this._apiUrl}/register`, user)
  }
}
