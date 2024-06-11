import { DdNavbarComponent } from './../../shared/dd-navbar/dd-navbar.component';
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-cursos',
    standalone: true,
    imports: [
        CommonModule, DdNavbarComponent
    ],
    templateUrl: './cursos.component.html',
    styleUrl: './cursos.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CursosComponent { }
