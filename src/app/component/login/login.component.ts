import { Component } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public username = ''
  public password = ''


  constructor(public ui: UiService) {}

}
