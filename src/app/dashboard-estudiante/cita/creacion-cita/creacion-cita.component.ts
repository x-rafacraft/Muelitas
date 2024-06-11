import { Component, OnInit } from '@angular/core';
import { DeNavbarComponent } from '../../../shared/de-navbar/de-navbar.component';
import { HttpClient } from '@angular/common/http';
// import { CitaService } from './../../../../../../../back-end-odontologia/src/cita/cita.service';

@Component({
  selector: 'app-creacion-cita',
  standalone: true,
  imports: [ DeNavbarComponent ],
  templateUrl: './creacion-cita.component.html',
  styleUrl: './creacion-cita.component.css'
})
export default class CreacionCitaComponent {

}
