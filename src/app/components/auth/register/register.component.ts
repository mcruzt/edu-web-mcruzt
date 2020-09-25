import { Component } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm;
  errorMessage;
  successMessage;

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private matSnackBar: MatSnackBar
  ) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required]
    });
  }


  loginGoogle(){
    this.authService.doGoogleLogin()
      .then(res => {
          this.router.navigate([environment.routeHome]);
        }, err => console.log(err)
      );
  }

  register(value){
    this.authService.doRegister(value)
      .then(res => {
        console.log(res);
        this.errorMessage = '';
        this.successMessage = 'Your account has been created';
        this.matSnackBar.open('Usuario creado correctamente', '', {
          duration: 4000,
          verticalPosition: 'top'
        });
      }, err => {
        this.matSnackBar.open(err.message, '', {
          duration: 4000,
          verticalPosition: 'top'
        });
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = '';
      });
  }

}
