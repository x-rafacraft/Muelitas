import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-modificar-curso',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './modificar-curso.component.html',
    styleUrl: './modificar-curso.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ModificarCursoComponent { }
