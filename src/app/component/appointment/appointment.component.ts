import { Component, Input } from '@angular/core';
import { Appointment } from 'src/app/appointment';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  @Input() appointment: Appointment | undefined

  constructor(public ui: UiService) {}


}
