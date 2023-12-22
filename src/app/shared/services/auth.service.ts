import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserModel } from '@core/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.apiAsp;

  constructor(private _http: HttpClient) { }

  verifyToken(token: string): Observable<UserModel | null> {
    return this._http.get<UserModel>(`${this.URL}/login/verifyToken`,
    { headers: { 'Authorization': `Bearer ${token}` } })
    .pipe(
      catchError((err) => {
        const {status, statusText} = err;
        console.log('Algo paso revisame', [status, statusText]);
        return of(null);
      })
    );
  }
}
