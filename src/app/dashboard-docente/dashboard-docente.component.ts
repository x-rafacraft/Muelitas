import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DdNavbarComponent } from '../shared/dd-navbar/dd-navbar.component';

@Component({
  selector: 'app-dashboard-docente',
  standalone: true,
  imports: [
    CommonModule, RouterModule, DdNavbarComponent
  ],
  templateUrl: './dashboard-docente.component.html',
  styleUrl: './dashboard-docente.component.css',
})
export class DashboardDocenteComponent { }

