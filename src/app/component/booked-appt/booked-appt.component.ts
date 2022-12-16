import { Component, Input } from '@angular/core';
import { Appointment } from 'src/app/appointment';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-booked-appt',
  templateUrl: './booked-appt.component.html',
  styleUrls: ['./booked-appt.component.css']
})
export class BookedApptComponent {
  @Input() appointment: Appointment | undefined


  constructor(public ui: UiService) {}

}
