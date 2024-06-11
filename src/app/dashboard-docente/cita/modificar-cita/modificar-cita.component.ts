import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DdNavbarComponent } from '../../../shared/dd-navbar/dd-navbar.component';

@Component({
  selector: 'app-modificar-cita',
  standalone: true,
  imports: [
    CommonModule, DdNavbarComponent
  ],
  templateUrl: './modificar-cita.component.html',
  styleUrl: './modificar-cita.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ModificarCitaComponent { }
