import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/api/auth.service';
import { SessionService } from '../../../../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm : FormGroup;

  constructor(
    private _fb : FormBuilder,
    private _router : Router,
    private _authS : AuthService,
    private _session : SessionService
  ){
    this.loginForm = this._fb.group({
      username : ['', Validators.required],
      password : ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  onSubmit() : void {
    if (this.loginForm.invalid){
      return;
    }

    this._authS.login(this.loginForm.value).subscribe({
      next : (reponse) => {
        console.log(reponse);
        this._session.setToken(reponse)
        console.log("Connexion réussie !!!");
        this._router.navigate(['/home'])
      },
      error : (error) => {
        console.log(error);
      }
    })
  }
}
