import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-usuarios',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<p>usuarios works!</p>`,
    styleUrl: './usuarios.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsuariosComponent { }
