import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DdNavbarComponent } from '../../../shared/dd-navbar/dd-navbar.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
// import { CitaService } from '../../../../../../../back-end-odontologia-master/src/cita/cita.service';  // Importa el servicio

@Component({
  selector: 'app-creacion-cita',
  standalone: true,
  imports: [
    CommonModule,
    DdNavbarComponent,
    ReactiveFormsModule, // Importa ReactiveFormsModule para formularios reactivos
  ],
  templateUrl: './creacion-cita.component.html',
  styleUrls: ['./creacion-cita.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CreacionCitaComponent {

}
