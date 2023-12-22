import { Component } from '@angular/core';
import { WaitModel } from '@core/models/wait.model';
import { WaitService } from '@modules/wait-reservations/services/wait.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  waits: WaitModel[] = [];

  constructor(private _waitService: WaitService) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this._waitService.getAll().subscribe((waits) => {
      this.waits = waits;
    });
  }

  convertDate(date: string): string {
    const dateClass = new Date(date);

    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false, // Formato de 24 horas
      timeZone: 'UTC', // Indicamos la zona horaria UTC
    };

    const data = `${dateClass.toLocaleDateString('es-ES', options)}`;

    return data;
  }
}
