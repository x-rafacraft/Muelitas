import { AsyncPipe, CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DaNavbarComponent } from "../../../shared/da-navbar/da-navbar.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { Observable } from "rxjs";
import { User } from "../../../interfaces/user";
import { UserService } from "../../../services/user.service";

@Component({
    selector: 'app-lista-usuario',
    standalone: true,
    imports: [
        CommonModule, DaNavbarComponent, AsyncPipe, RouterModule, FormsModule
    ],
    templateUrl : './lista-usuario.component.html',
    styleUrl: './lista-usuario.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ListaUsuarioComponent implements OnInit {
  public usuarioResults$!: Observable<User[]>;

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.usuarioResults$ = this.service.getUserList();
    this.usuarioResults$.subscribe((response: User[]) => {
      console.log('response', response);
    });
  }
 }
