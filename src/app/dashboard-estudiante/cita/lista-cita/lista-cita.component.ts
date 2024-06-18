import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CitaService } from '../../../services/cita.service';
import { Observable } from 'rxjs';
import { Cita } from '../../../interfaces/cita';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DeNavbarComponent } from '../../../shared/de-navbar/de-navbar.component';

@Component({
  selector: 'app-lista-cita',
  standalone: true,
  imports: [CommonModule, DeNavbarComponent, FormsModule],
  templateUrl: './lista-cita.component.html',
  styleUrls: ['./lista-cita.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ListaCitaComponent implements OnInit {
  public citaResults$!: Observable<Cita[]>;
  public filteredCitaResults$!: Observable<Cita[]>;

  filterDate: string = '';
  filterOdontologo: string = '';
  sortAscending: boolean = true;
  filterToday: boolean = false;

  constructor(private service: CitaService, private router: Router) {}

  ngOnInit(): void {
    this.citaResults$ = this.service.getCitaList();
    this.filteredCitaResults$ = this.citaResults$;
  }

  onFilterChange(): void {
    this.filteredCitaResults$ = this.citaResults$.pipe(
      map(citas => citas
        .filter(cita =>
          (!this.filterDate || cita.fecha.includes(this.filterDate)) &&
          (!this.filterOdontologo || cita.odontologo.toLowerCase().includes(this.filterOdontologo.toLowerCase())) &&
          (!this.filterToday || new Date(cita.fecha).toDateString() === new Date().toDateString())
        )
        .sort((a, b) => {
          if (this.filterToday) {
            return this.sortAscending ? a.hora.localeCompare(b.hora) : b.hora.localeCompare(a.hora);
          } else {
            return this.sortAscending ? a.fecha.localeCompare(b.fecha) : b.fecha.localeCompare(a.fecha);
          }
        })
      )
    );
  }

  toggleSortOrder(): void {
    this.sortAscending = !this.sortAscending;
    this.onFilterChange();
  }

  toggleTodayFilter(): void {
    this.filterToday = !this.filterToday;
    this.onFilterChange();
  }

  clearFilters(): void {
    this.filterDate = '';
    this.filterOdontologo = '';
    this.filterToday = false;
    this.sortAscending = true;
    this.filteredCitaResults$ = this.citaResults$;
  }

  editCita(id: number): void {
    this.router.navigate([`/dashboard-docente/cita/modificar-cita`, id]);
  }

  deleteCita(id: number): void {
    if (confirm('¿Está seguro de que desea eliminar esta cita?')) {
      this.service.deleteCita(id).subscribe(() => {
        this.onFilterChange();
      });
    }
  }
}
