import { CommonModule, AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DdNavbarComponent } from '../../../shared/dd-navbar/dd-navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SedeService } from '../../../services/sede.service';
import { Observable } from 'rxjs';
import { Sede } from '../../../interfaces/sede';

@Component({
    selector: 'app-lista-sede',
    standalone: true,
    imports: [AsyncPipe, CommonModule, DdNavbarComponent, RouterModule, FormsModule],
    templateUrl: './lista-sede.component.html',
    styleUrl: './lista-sede.component.css',
})
export default class ListaSedeComponent implements OnInit {
  public sedeResults$!: Observable<Sede[]>;

  constructor(private service: SedeService) { }

  ngOnInit(): void {
    this.sedeResults$ = this.service.getSedeList();
    this.sedeResults$.subscribe((response: Sede[]) => {
      console.log('response', response);
    });
  }
}
