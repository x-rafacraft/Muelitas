import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DdNavbarComponent } from "../../../shared/dd-navbar/dd-navbar.component";
import { PeriodoService } from "../../../services/periodo.service";
import { Periodo } from "../../../interfaces/periodo";
import { Observable } from "rxjs";

@Component({
    selector: 'app-lista-periodo',
    standalone: true,
    imports: [
        CommonModule, DdNavbarComponent
    ],
    templateUrl: './lista-periodo.component.html',
    styleUrls: ['./lista-periodo.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ListaPeriodoComponent implements OnInit {
    periodos$: Observable<Periodo[]> = new Observable<Periodo[]>();

    constructor(private periodoService: PeriodoService) {}

    ngOnInit(): void {
        this.periodos$ = this.periodoService.getPeriodoList();
    }
}
