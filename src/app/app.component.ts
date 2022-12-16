import { Component } from '@angular/core';
import { UiService } from './service/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'doctors-office-febe';

  constructor(public ui: UiService) {}
}
