import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-paciente',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<p>paciente works!</p>`,
    styleUrl: './paciente.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PacienteComponent { }
