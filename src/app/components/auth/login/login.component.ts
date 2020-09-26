import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm;

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private matSnackBar: MatSnackBar
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required]
    });
  }

  loginGoogle(){
    this.authService.doGoogleLogin()
      .then(res => {
        this.router.navigate([environment.routeHome]);
      });
  }

  login(value){
    if (this.loginForm.valid){
    this.authService.doLogin(value)
      .then(res => {
        this.router.navigate([environment.routeHome]);
      }, err => {
        this.matSnackBar.open(err.message, '', {
          duration: 4000,
          verticalPosition: 'top'
        });
        console.log(err);
      });

    }
  }

}
