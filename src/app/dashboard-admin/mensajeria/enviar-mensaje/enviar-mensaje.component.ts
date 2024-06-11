import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DaNavbarComponent } from "../../../shared/da-navbar/da-navbar.component";

@Component({
    selector: 'app-enviar-mensaje',
    standalone: true,
    imports: [
        CommonModule, DaNavbarComponent
    ],
    templateUrl: './enviar-mensaje.component.html',
    styleUrl: './enviar-mensaje.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class EnviarMensajeComponent { }
