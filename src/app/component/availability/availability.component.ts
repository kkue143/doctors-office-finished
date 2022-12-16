import { Component, Input } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Appointment } from 'src/app/appointment';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent {
  @Input() appointment: Appointment | undefined


  constructor(public ui: UiService) {}

}
