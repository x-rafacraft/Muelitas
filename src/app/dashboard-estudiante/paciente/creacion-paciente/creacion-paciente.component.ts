import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DeNavbarComponent } from "../../../shared/de-navbar/de-navbar.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { PacienteService } from "../../../services/paciente.service";
import { Paciente } from "../../../interfaces/paciente";

@Component({
    selector: 'app-creacion-paciente',
    standalone: true,
    imports: [
        CommonModule, DeNavbarComponent, ReactiveFormsModule
    ],
    templateUrl: './creacion-paciente.component.html',
    styleUrls: ['./creacion-paciente.component.css'], // Cambiado a styleUrls
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CreacionPacienteComponent {
    pacienteForm: FormGroup;

    constructor(
      private fb: FormBuilder,
      private pacienteService: PacienteService,
      private router: Router
    ) {
      this.pacienteForm = this.fb.group({
          FechaCreacion: ['', Validators.required],
          HoraCreacion: ['', Validators.required],
          dni: ['', Validators.required],
          Nombre: ['', Validators.required],
          ApellidoPaterno: ['', Validators.required],
          ApellidoMaterno: ['', Validators.required],
          Sexo: ['', Validators.required],
          Lugar: ['', Validators.required],
          Domicilio: ['', Validators.required],
          FechaNacimiento: ['', Validators.required],
          EstadoCivil: ['', Validators.required],
          NroCelular: ['', Validators.required],
          Correo: ['', Validators.required],
          Ocupacion: ['', Validators.required],
          Responsable: ['', Validators.required],
          DomicilioResponsable: ['', Validators.required],
          CelularResponsable: ['', Validators.required],
          MotivoConsulta: ['', Validators.required],
      });
    }

    onSubmit() {
      if (this.pacienteForm.valid) {
        const newPaciente: Paciente = this.pacienteForm.value;
        this.pacienteService.addPaciente(newPaciente).subscribe({
          next: (response) => {
            console.log('Paciente creado', response);
            this.router.navigate(['/dashboard-estudiante/paciente/lista-paciente']);
          },
          error: (err) => {
            console.error('Error al crear el paciente', err);
          }
        });
      }
    }
}
