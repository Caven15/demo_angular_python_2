import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './compontents/all/all.component';
import { utilisateurResolver } from '../../services/resolvers/utilisateur.resolver';
import { authGuard } from '../../services/guards/auth.guard';

const routes: Routes = [
  {path : 'all', component : AllComponent, canActivate : [authGuard], resolve: { toto:utilisateurResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateurRoutingModule { }