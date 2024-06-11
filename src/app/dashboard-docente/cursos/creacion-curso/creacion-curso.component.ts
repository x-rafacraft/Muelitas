import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DdNavbarComponent } from "../../../shared/dd-navbar/dd-navbar.component";
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CursoService } from "../../../services/curso.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-creacion-curso',
    standalone: true,
    imports: [
        CommonModule, DdNavbarComponent, ReactiveFormsModule
    ],
    templateUrl: './creacion-curso.component.html',
    styleUrls: ['./creacion-curso.component.css'], // Corrección aquí
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CreacionCursoComponent {
    cursoForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private cursoService: CursoService,
        private router: Router
    ) {
        this.cursoForm = this.fb.group({
            nrc: ['', Validators.required],
            nombreCurso: ['', Validators.required],
            creditoCurso: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
            descripcionCurso: ['', Validators.required]
        });
    }

    onSubmit() {
      if (this.cursoForm.valid) {
          this.cursoService.addCurso(this.cursoForm.value).subscribe(() => {
              this.router.navigate(['/lista-curso']);
          });
      }
  }
}
