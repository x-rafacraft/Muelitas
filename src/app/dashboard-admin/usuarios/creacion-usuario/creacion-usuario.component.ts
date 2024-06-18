import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DaNavbarComponent } from "../../../shared/da-navbar/da-navbar.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { UserService } from "../../../services/user.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-creacion-usuario',
    standalone: true,
    imports: [
        CommonModule, DaNavbarComponent, ReactiveFormsModule
    ],
    templateUrl : './creacion-usuario.component.html',
    styleUrl: './creacion-usuario.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CreacionUsuarioComponent {
    userForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private router: Router
    ) {
        this.userForm = this.fb.group({
            username: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            estado: ['', Validators.required],
            rol: ['', Validators.required]
        });
    }

    onSubmit() {
        if (this.userForm.valid) {
            this.userService.addUser(this.userForm.value).subscribe(() => {
              this.router.navigate(['/dashboard-admin/usuarios/lista-usuario']);
            });
        }
    }
}
