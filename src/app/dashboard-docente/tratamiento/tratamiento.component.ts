import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-tratamiento',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './tratamiento.component.html',
    styleUrl: './tratamiento.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TratamientoComponent { }
