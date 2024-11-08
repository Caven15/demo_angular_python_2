import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/api/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm : FormGroup

  constructor(
    private _fb : FormBuilder,
    private _router : Router,
    private _authS : AuthService){
      this.registerForm = this._fb.group({
        username : ['', Validators.required],
        password : ['', [Validators.required, Validators.minLength(8)]]
      })
    }

    onSubmit() : void {
      if (this.registerForm.invalid) {
        return
      }

      this._authS.register(this.registerForm.value).subscribe({
        next : (reponse) => {
          console.log(reponse.message);
          this._router.navigate(['/login'])
        },
        error : (error) => {
          console.log(error.message);
        }
      })
    }
}
