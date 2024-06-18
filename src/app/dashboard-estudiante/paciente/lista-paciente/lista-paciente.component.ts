import { AsyncPipe, CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DdNavbarComponent } from "../../../shared/dd-navbar/dd-navbar.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { Paciente } from "../../../interfaces/paciente";
import { Observable } from "rxjs";
import { PacienteService } from "../../../services/paciente.service";
import { DeNavbarComponent } from "../../../shared/de-navbar/de-navbar.component";

@Component({
    selector: 'app-lista-paciente',
    standalone: true,
    imports: [
        CommonModule, DeNavbarComponent, AsyncPipe, RouterModule, FormsModule
    ],
    templateUrl : './lista-paciente.component.html',
    styleUrl: './lista-paciente.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ListaPacienteComponent  implements OnInit{
  public pacienteResults$!: Observable<Paciente[]>;

  constructor(private service: PacienteService) { }

  ngOnInit(): void {
    this.pacienteResults$ = this.service.getPacienteList();
    this.pacienteResults$.subscribe((response: Paciente[]) => {
      console.log('response', response);
    });
  }
 }
