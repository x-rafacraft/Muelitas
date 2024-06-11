import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DdNavbarComponent } from '../../../shared/dd-navbar/dd-navbar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-cita',
  standalone: true,
  imports: [CommonModule, DdNavbarComponent, FormsModule],
  templateUrl: './lista-cita.component.html',
  styleUrl: './lista-cita.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ListaCitaComponent {
  appointments = [
    { fecha: '2024-05-15', hora: '10:00 AM', dni: '12345678', odontologo: 'Dr. García', motivo: 'Limpieza Dental', sede: 'Lima', extras: 'Radiografía' },
    { fecha: '2024-05-15', hora: '10:00 AM', dni: '75475474', odontologo: 'Dr. García', motivo: 'Limpieza Dental', sede: 'Lima', extras: 'Radiografía' },
    { fecha: '2024-05-15', hora: '10:00 AM', dni: '72750304', odontologo: 'Dr. García', motivo: 'Limpieza Dental', sede: 'Lima', extras: 'Radiografía' },
    { fecha: '2024-05-15', hora: '10:00 AM', dni: '25252525', odontologo: 'Dr. García', motivo: 'Limpieza Dental', sede: 'Lima', extras: 'Radiografía' },

  ];

  searchDNI: string = '';
  filteredAppointments = this.appointments;

  constructor() {}

  ngOnInit(): void {}

  filterAppointments(): void {
    if (this.searchDNI) {
      this.filteredAppointments = this.appointments.filter(appointment =>
        appointment.dni.includes(this.searchDNI)
      );
    } else {
      this.filteredAppointments = this.appointments;
    }
  }
}
