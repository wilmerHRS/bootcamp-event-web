import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { WaitModel } from '@core/models/wait.model';

@Injectable({
  providedIn: 'root'
})
export class WaitService {
  private readonly URL = environment.api;

  constructor(private _http: HttpClient) { }

  getAll(): Observable<WaitModel[]> {
    return this._http.get<WaitModel[]>(`${this.URL}/wait-reservation`)
    .pipe(
      catchError((err) => {
        const {status, statusText} = err;
        console.log('Algo paso revisame', [status, statusText]);
        return of([]);
      })
    );
  }
}
