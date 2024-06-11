import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DeNavbarComponent } from "../../../shared/de-navbar/de-navbar.component";

@Component({
    selector: 'app-bandeja-entrada',
    standalone: true,
    imports: [
        CommonModule, DeNavbarComponent
    ],
    templateUrl: './bandeja-entrada.component.html',
    styleUrl: './bandeja-entrada.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BandejaEntradaComponent { }
