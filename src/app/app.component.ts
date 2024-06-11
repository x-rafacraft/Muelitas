import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DdNavbarComponent } from './shared/dd-navbar/dd-navbar.component';
import { DeNavbarComponent } from './shared/de-navbar/de-navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'odontologia';
}
