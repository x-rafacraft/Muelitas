import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DdNavbarComponent } from "../../../shared/dd-navbar/dd-navbar.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { TratamientoService } from "../../../services/tratamiento.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-creacion-tratamiento',
    standalone: true,
    imports: [
        CommonModule, DdNavbarComponent, ReactiveFormsModule
    ],
    templateUrl: './creacion-tratamiento.component.html',
    styleUrl: './creacion-tratamiento.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CreacionTratamientoComponent {
    tratamientoForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private tratamientoService: TratamientoService,
        private router: Router
    ) {
        this.tratamientoForm = this.fb.group({
            nombre: ['', Validators.required],
            detalle: ['', Validators.required]
        });
    }

    onSubmit() {
      if (this.tratamientoForm.valid) {
          this.tratamientoService.addTratamiento(this.tratamientoForm.value).subscribe(() => {
              this.router.navigate(['/lista-tratamiento']);
          });
      }
  }
 }
