import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DdNavbarComponent } from '../../shared/dd-navbar/dd-navbar.component';

@Component({
  selector: 'app-cita',
  standalone: true,
  imports: [
    CommonModule, DdNavbarComponent
  ],
  templateUrl: './cita.component.html',
  styleUrl: './cita.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitaComponent { }
