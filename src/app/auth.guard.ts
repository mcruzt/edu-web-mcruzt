import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {UserService} from './services/user.service';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public userService: UserService,
    private router: Router
  ) {}

  canActivate(): Promise<boolean>{
    return new Promise((resolve, reject) => {
      this.userService.getCurrentUser()
        .then(user => {
          this.router.navigate([environment.routeHome]);
          return resolve(false);
        }, err => {
          return resolve(true);
        });
    });
  }
}
