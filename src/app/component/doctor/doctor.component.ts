import { Component } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {

  constructor(public ui: UiService) {}

}
