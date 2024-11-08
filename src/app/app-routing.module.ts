import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path : 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  { path : 'utilisateur', loadChildren: () => import('./modules/utilisateur/utilisateur.module').then(m => m.UtilisateurModule)},
  { path : 'home', component : HomeComponent},
  { path : '', redirectTo : 'home', pathMatch : 'full'}, // Redirection par default
  { path : '**', redirectTo : '/home'} // Redirction pour les routes inconnues
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
