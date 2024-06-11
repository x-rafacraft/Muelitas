import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DaNavbarComponent } from "../../../shared/da-navbar/da-navbar.component";

@Component({
    selector: 'app-modificar-usuario',
    standalone: true,
    imports: [
        CommonModule, DaNavbarComponent
    ],
    templateUrl : './modificar-usuario.component.html',
    styleUrl: './modificar-usuario.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ModificarUsuarioComponent { }
