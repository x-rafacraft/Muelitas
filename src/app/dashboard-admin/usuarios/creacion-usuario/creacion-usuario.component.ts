import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DaNavbarComponent } from "../../../shared/da-navbar/da-navbar.component";
@Component({
    selector: 'app-creacion-usuario',
    standalone: true,
    imports: [
        CommonModule, DaNavbarComponent
    ],
    templateUrl : './creacion-usuario.component.html',
    styleUrl: './creacion-usuario.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CreacionUsuarioComponent { }
