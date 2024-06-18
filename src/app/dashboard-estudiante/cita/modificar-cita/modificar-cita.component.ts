import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CitaService } from '../../../services/cita.service';
import { Cita } from '../../../interfaces/cita';
import { DeNavbarComponent } from '../../../shared/de-navbar/de-navbar.component';

@Component({
  selector: 'app-modificar-cita',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DeNavbarComponent
  ],
  templateUrl: './modificar-cita.component.html',
  styleUrls: ['./modificar-cita.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ModificarCitaComponent implements OnInit {
  citaForm!: FormGroup;
  citaId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private citaService: CitaService
  ) {}

  ngOnInit(): void {
    this.citaId = +this.route.snapshot.paramMap.get('id')!;
    this.citaService.findOne(this.citaId).subscribe((cita: Cita) => {
      this.citaForm = this.fb.group({
        fecha: [cita.fecha, Validators.required],
        hora: [cita.hora, Validators.required],
        odontologo: [cita.odontologo, Validators.required],
        motivo: [cita.motivo, Validators.required],
        sede: [cita.sede, Validators.required],
        extras: [cita.extras]
      });
    });
  }

  onSubmit(): void {
    if (this.citaForm.valid) {
      this.citaService.updateCita(this.citaId, this.citaForm.value).subscribe(() => {
        this.router.navigate(['/dashboard-estudiante/cita/lista-cita']);
      });
    }
  }
}
