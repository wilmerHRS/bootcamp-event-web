import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventModel } from '@core/models/event.model';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private readonly URL = environment.api;

  constructor(private _http: HttpClient) { }

  getAll(): Observable<EventModel[]> {
    return this._http.get<EventModel[]>(`${this.URL}/events`)
    .pipe(
      catchError((err) => {
        const {status, statusText} = err;
        console.log('Algo paso revisame', [status, statusText]);
        return of([]);
      })
    );
  }

  getAllBySearch(search: string): Observable<EventModel[]> {
    return this._http.get<EventModel[]>(`${this.URL}/events/search/?search=${search}`)
    .pipe(
      catchError((err) => {
        const {status, statusText} = err;
        console.log('Algo paso revisame', [status, statusText]);
        return of([]);
      })
    );
  }
}
