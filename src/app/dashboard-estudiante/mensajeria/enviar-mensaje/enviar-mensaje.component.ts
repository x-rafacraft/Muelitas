import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DeNavbarComponent } from "../../../shared/de-navbar/de-navbar.component";

@Component({
    selector: 'app-enviar-mensaje',
    standalone: true,
    imports: [
        CommonModule, DeNavbarComponent
    ],
    templateUrl: './enviar-mensaje.component.html',
    styleUrl: './enviar-mensaje.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class EnviarMensajeComponent { }
