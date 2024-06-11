import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DaNavbarComponent } from "../../../shared/da-navbar/da-navbar.component";

@Component({
    selector: 'app-bandeja-entrada',
    standalone: true,
    imports: [
        CommonModule, DaNavbarComponent
    ],
    templateUrl: './bandeja-entrada.component.html',
    styleUrl: './bandeja-entrada.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BandejaEntradaComponent { }
