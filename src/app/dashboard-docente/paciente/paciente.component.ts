import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DdNavbarComponent } from "../../shared/dd-navbar/dd-navbar.component";

@Component({
    selector: 'app-paciente',
    standalone: true,
    imports: [
        CommonModule, DdNavbarComponent
    ],
    templateUrl : './paciente.component.html',
    styleUrl: './paciente.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PacienteComponent { }
