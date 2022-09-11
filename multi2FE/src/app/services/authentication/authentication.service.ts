import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  meow='bypass';
  constructor(
    private router: Router
  ) { }

  canActivate() : boolean{
    //if (sessionStorage.getItem('accountid')) {
    // if (this.meow=='bypass') {
    //   this.router.navigate(['']);
      //return false;
    //   return true;
    // }
    return true;
  }
}
