import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionService } from '../session.service';
import { Utilisateur } from '../../models/utilisateur.model';
import { Observable } from 'rxjs';
import { environement } from '../../../environement';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private _apiUrl : string = `${environement.apiUrl}/utilisateurs`

  constructor(
    private _http : HttpClient,
    private _session : SessionService
  ) { }

  getAllUtilisateurs() : Observable<Utilisateur[]>{

    // const token : string | null = this._session.getToken()

    // // Configuration des en-têtes avec le token d'identification
    // const headers = new HttpHeaders({
    //   'Authorization' : `Bearer ${token}`
    // })

    // Envoi de la requete avec les en-têtes de sécurité
    // return this._http.get<Utilisateur[]>(`${this._apiUrl}`,{headers})
    return this._http.get<Utilisateur[]>(`${this._apiUrl}`)
  }
}
