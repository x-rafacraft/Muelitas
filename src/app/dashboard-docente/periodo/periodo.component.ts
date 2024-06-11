import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DdNavbarComponent } from "../../shared/dd-navbar/dd-navbar.component";

@Component({
    selector: 'app-periodo',
    standalone: true,
    imports: [
        CommonModule, DdNavbarComponent
    ],
    templateUrl: './periodo.component.html',
    styleUrl: './periodo.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PeriodoComponent { }
