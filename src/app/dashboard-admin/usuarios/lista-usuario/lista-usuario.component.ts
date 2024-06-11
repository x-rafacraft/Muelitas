import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DaNavbarComponent } from "../../../shared/da-navbar/da-navbar.component";
@Component({
    selector: 'app-lista-usuario',
    standalone: true,
    imports: [
        CommonModule, DaNavbarComponent
    ],
    templateUrl : './lista-usuario.component.html',
    styleUrl: './lista-usuario.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ListaUsuarioComponent { }
