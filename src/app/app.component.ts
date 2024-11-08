import { Component, computed } from '@angular/core';
import { SessionService } from './services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'demo_angular_python_2';

  constructor(
    private _session : SessionService,
    private _router : Router
  ){}

  // Utilisation de computed pour réagir automatiquement au changements de authStatus
  authStatus = this._session.authStatus;

  logout() : void {
    this._router.navigate(['/home'])
    this._session.removeToken()
  }
}
