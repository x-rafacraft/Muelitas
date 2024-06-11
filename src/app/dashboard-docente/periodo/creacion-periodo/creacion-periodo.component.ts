// src/app/components/creacion-periodo/creacion-periodo.component.ts
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PeriodoService } from "../../../services/periodo.service";
import { SedeService } from "../../../services/sede.service";
import { Router } from "@angular/router";
import { Sede } from '../../../interfaces/sede';
import { DdNavbarComponent } from "../../../shared/dd-navbar/dd-navbar.component";

@Component({
    selector: 'app-creacion-periodo',
    standalone: true,
    imports: [
        CommonModule, ReactiveFormsModule, DdNavbarComponent
    ],
    templateUrl: './creacion-periodo.component.html',
    styleUrls: ['./creacion-periodo.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CreacionPeriodoComponent implements OnInit {
    periodoForm: FormGroup;
    sedes: Sede[] = [];

    constructor(
        private fb: FormBuilder,
        private periodoService: PeriodoService,
        private sedeService: SedeService,
        private router: Router
    ) {
        this.periodoForm = this.fb.group({
            nombre: ['', Validators.required],
            inicio: ['', Validators.required],
            fin: ['', Validators.required],
            sede: ['', Validators.required]
        });
    }

    ngOnInit(): void {
      this.sedeService.getSedeList().subscribe((data: Sede[]) => {
          this.sedes = data;
      });
    }

    onSubmit() {
      if (this.periodoForm.valid) {
          const periodo = {
              ...this.periodoForm.value,
              sede: this.sedes.find(sede => sede.id === this.periodoForm.value.sede)
          };
          this.periodoService.addPeriodo(periodo).subscribe(() => {
              this.router.navigate(['/lista-periodo']);
          });
      }
  }
}
