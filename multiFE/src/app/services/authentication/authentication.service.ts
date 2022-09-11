import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private router: Router
    ) { }

  canActivate() : boolean{
    if (sessionStorage.getItem('accountid')) {
      //this.router.navigate(['']);
      //return false;
      console.log("anon-guard.services.ts > false");return true;
    }
    console.log("anon-guard.services.ts > true");
    return true;
  }
}
