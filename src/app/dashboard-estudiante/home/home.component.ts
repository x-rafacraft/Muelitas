import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DeNavbarComponent } from '../../shared/de-navbar/de-navbar.component';
import { EstuadianteService } from '../../services/estudiante.service';
import { Observable } from 'rxjs';
import { Estudiante } from '../../interfaces/estudiante';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ AsyncPipe, CommonModule, RouterModule, DeNavbarComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // corregido de styleUrl a styleUrls
})
export default class HomeComponent implements OnInit {
  public estudianteResults$!: Observable<Estudiante[]>;

  constructor(private service: EstuadianteService) { }

  ngOnInit(): void {
    this.estudianteResults$ = this.service.getEstudianteList();
    this.estudianteResults$.subscribe((response: Estudiante[]) => {
      console.log('response', response);
    });
  }
}
