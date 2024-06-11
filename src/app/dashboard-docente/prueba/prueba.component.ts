import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-prueba',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './prueba.component.html',
    styleUrl: './prueba.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PruebaComponent { }
