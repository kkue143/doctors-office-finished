import { Component } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public username = ''
  public password = ''

  constructor(public ui: UiService) {}

  ngOnInit(): void {}

}
