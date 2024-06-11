import { DdNavbarComponent } from '../../../shared/dd-navbar/dd-navbar.component';
import { CommonModule, AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Curso } from '../../../interfaces/curso';
import { CursoService } from '../../../services/curso.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-cursos',
    standalone: true,
    imports: [
        CommonModule, DdNavbarComponent, AsyncPipe, DdNavbarComponent, RouterModule, FormsModule
    ],
    templateUrl: './lista-curso.component.html',
    styleUrl: './lista-curso.component.css',
})
export default class CursosComponent implements OnInit {
  public cursoResults$!: Observable<Curso[]>;

  constructor(private service: CursoService) { }

  ngOnInit(): void {
    this.cursoResults$ = this.service.getCursoList();
    this.cursoResults$.subscribe((response: Curso[]) => {
      console.log('response', response);
    });
  }
 }
