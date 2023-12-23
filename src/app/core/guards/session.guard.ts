import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '@shared/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  token = '';

  constructor(private cookieService: CookieService, private router: Router, private authService: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = route.queryParamMap.get('access_token');
    return this.verifySession(token);
  }

  verifySession(token: string | null){
    if(token) this.cookieService.set('access_token', token, 4, '/'); // guardar el token con tiempo de expiración
    const existsToken = this.cookieService.check('access_token');

    if(!existsToken) {
      this.router.navigate(['/errors', '401']);
      return false;
    }

    const accessToken = this.cookieService.get('access_token');
    let correct: boolean = true;
    
    this.authService.verifyToken(accessToken).subscribe((user) => {
      if(!user) {
        this.router.navigate(['/errors', '401']);
        correct = false;
        return;
      }

      this.cookieService.set('user', JSON.stringify(user), 4, '/'); // guardar el usuario con tiempo de expiración
    });
    
    return correct;
  }
  
}
