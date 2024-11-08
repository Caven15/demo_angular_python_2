import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  private readonly TOKEN_KEY = 'authToken'
  intercept(req : HttpRequest<any>, next : HttpHandler): Observable<HttpEvent<any>>{
      console.log("j'intercepte !!!");
      // Récupèrer le token depuis le locale storage
      const token : string | null = localStorage.getItem(this.TOKEN_KEY)

      //  Clone la requête et ajoute le token dans les entêtes, s'il est présent
      if (token) {
        const authReq = req.clone({
          headers : req.headers.set('Authorization', `Bearer ${token}`)
        })
        return next.handle(authReq)
      }

      //Si aucun token n'es présent, la requête originale est envoyé
      return next.handle(req)
  }
}
