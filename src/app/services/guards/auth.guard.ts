import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionService } from '../session.service';

export const authGuard: CanActivateFn = (route, state) => {
  const session = inject(SessionService)
  const router = inject(Router)

  if(session.estConnecte()){
    return true // L'utilisateur est authentifié, accès autorisé
  } else{
    // problème d'accès redirection pour renvoie false
    router.navigate(['/auth/login'])
    return false
  }
};