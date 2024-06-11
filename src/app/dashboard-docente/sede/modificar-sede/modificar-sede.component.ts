import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SedeService } from '../../../services/sede.service';
import { Sede } from '../../../interfaces/sede';
import { DdNavbarComponent } from "../../../shared/dd-navbar/dd-navbar.component";

@Component({
  selector: 'app-modificar-sede',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DdNavbarComponent
  ],
  templateUrl: './modificar-sede.component.html',
  styleUrls: ['./modificar-sede.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ModificarSedeComponent implements OnInit {
  sedeForm: FormGroup;
  sedeId!: number;

  constructor(
    private fb: FormBuilder,
    private sedeService: SedeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.sedeForm = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      celular: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      correo: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.sedeId = params['id'];
      this.sedeService.getSedeById(this.sedeId).subscribe((sede: Sede) => {
        this.sedeForm.patchValue(sede);
      });
    });
  }

  onSubmit() {
    if (this.sedeForm.valid) {
      const updatedSede: Sede = { id: this.sedeId, ...this.sedeForm.value };
      this.sedeService.updateSede(updatedSede).subscribe(() => {
        this.router.navigate(['/dashboard-docente/sede/lista-sede']);
      });
    }
  }
}
