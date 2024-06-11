import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DeNavbarComponent} from '../../app/shared/de-navbar/de-navbar.component'

@Component({
  selector: 'app-dashboard-estudiante',
  standalone: true,
  imports: [ CommonModule,
    RouterModule, DeNavbarComponent],
  templateUrl: './dashboard-estudiante.component.html',
  styleUrl: './dashboard-estudiante.component.css'
})
export class DashboardEstudianteComponent {

}
