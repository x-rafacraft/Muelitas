import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DdNavbarComponent } from '../../../shared/dd-navbar/dd-navbar.component';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SedeService } from "../../../services/sede.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-creacion-sede',
    standalone: true,
    imports: [
        CommonModule, DdNavbarComponent, ReactiveFormsModule
    ],
    templateUrl: './creacion-sede.component.html',
    styleUrl: './creacion-sede.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CreacionSedeComponent {
  sedeForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private sedeService: SedeService,
        private router: Router
    ) {
        this.sedeForm = this.fb.group({
            nombre: ['', Validators.required],
            direccion: ['', Validators.required],
            celular: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
            correo: ['', [Validators.required, Validators.email]]
        });
    }

    onSubmit() {
        if (this.sedeForm.valid) {
            this.sedeService.addSede(this.sedeForm.value).subscribe(() => {
                this.router.navigate(['/lista-sede']);
            });
        }
    }
 }
