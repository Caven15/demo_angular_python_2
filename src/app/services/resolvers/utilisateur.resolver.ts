import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { UtilisateurService } from '../api/utilisateur.service';
import { delay } from 'rxjs';
import { Utilisateur } from '../../models/utilisateur.model';

export const utilisateurResolver: ResolveFn<Utilisateur[]> = (route, state) => {

  console.log("Je passe dnas mon resolve");
  const utilisateurS = inject(UtilisateurService)

  return utilisateurS.getAllUtilisateurs().pipe(
    delay(3000)
  )
};
