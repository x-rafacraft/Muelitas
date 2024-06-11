import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DdNavbarComponent } from "../../../shared/dd-navbar/dd-navbar.component";

@Component({
    selector: 'app-modificar-periodo',
    standalone: true,
    imports: [
        CommonModule, DdNavbarComponent
    ],
    templateUrl: './modificar-periodo.component.html',
    styleUrl: './modificar-periodo.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ModificarPeriodoComponent { }
