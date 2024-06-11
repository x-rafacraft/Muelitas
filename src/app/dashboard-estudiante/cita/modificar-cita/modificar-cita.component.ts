import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DeNavbarComponent } from "../../../shared/de-navbar/de-navbar.component";
@Component({
    selector: 'app-modificar-cita',
    standalone: true,
    imports: [CommonModule, DeNavbarComponent],
    templateUrl: './modificar-cita.component.html',
    styleUrl: './modificar-cita.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ModificarCitaComponent { }
