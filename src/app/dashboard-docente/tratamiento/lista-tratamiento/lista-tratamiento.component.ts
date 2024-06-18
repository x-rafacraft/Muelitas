import { AsyncPipe, CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DdNavbarComponent } from "../../../shared/dd-navbar/dd-navbar.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { Tratamiento } from "../../../interfaces/tratamiento";
import { Observable } from "rxjs";
import { TratamientoService } from "../../../services/tratamiento.service";

@Component({
    selector: 'app-lista-tratamiento',
    standalone: true,
    imports: [
        CommonModule, DdNavbarComponent, AsyncPipe, RouterModule, FormsModule
    ],
    templateUrl: './lista-tratamiento.component.html',
    styleUrl: './lista-tratamiento.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ListaTratamientoComponent implements OnInit {
  public tratamientoResults$!: Observable<Tratamiento[]>;

  constructor(private service: TratamientoService) { }

  ngOnInit(): void {
    this.tratamientoResults$ = this.service.getTratamientoList();
    this.tratamientoResults$.subscribe((response: Tratamiento[]) => {
      console.log('response', response);
    });
  }
}

