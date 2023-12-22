import { Component } from '@angular/core';
import { EventModel } from '@core/models/event.model';
import { EventsService } from '@modules/events/services/events.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  events: EventModel[] = [];
  inputSearch: string = '';

  constructor(private _eventsService: EventsService) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this._eventsService.getAll().subscribe((events) => {
      this.events = events;
    });
  }

  loadEventsBySearch(search: string): void {
    this._eventsService.getAllBySearch(search).subscribe((events) => {
      this.events = events;
    });
  }

  searchEvents(): void {
    if(this.inputSearch === '') {
      this.loadEvents();
      return;
    }

    this.loadEventsBySearch(this.inputSearch);
  }

  convertDate(date: string): string {
    const dateClass = new Date(date);
    const data = `${dateClass.toLocaleDateString()} ${dateClass.toLocaleTimeString()}`;

    return data;
  }
}
