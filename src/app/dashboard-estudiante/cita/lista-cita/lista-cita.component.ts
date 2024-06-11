import { Component, OnInit } from '@angular/core';
import { DeNavbarComponent } from '../../../shared/de-navbar/de-navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-cita',
  standalone: true,
  imports: [DeNavbarComponent, CommonModule, FormsModule],
  templateUrl: './lista-cita.component.html',
  styleUrls: ['./lista-cita.component.css']
})
export default class ListaCitaComponent implements OnInit {
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
