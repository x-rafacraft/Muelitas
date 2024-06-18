import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-modificar-tratamiento',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './modificar-tratamiento.component.html',
    styleUrl: './modificar-tratamiento.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ModificarTratamientoComponent { }
