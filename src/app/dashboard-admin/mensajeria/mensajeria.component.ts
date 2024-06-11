import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DaNavbarComponent } from "../../shared/da-navbar/da-navbar.component";

@Component({
    selector: 'app-mensajeria',
    standalone: true,
    imports: [
        CommonModule, DaNavbarComponent
    ],
    templateUrl: './mensajeria.component.html',
    styleUrl: './mensajeria.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MensajeriaComponent { }
