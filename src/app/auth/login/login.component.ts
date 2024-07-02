import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(event: Event) {
    event.preventDefault();  // Prevenir el comportamiento predeterminado del formulario
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe(
        user => {
          switch (user.rol) {
            case 'estudiante':
              this.router.navigate(['/dashboard-estudiante']);
              break;
            case 'docente':
              this.router.navigate(['/dashboard-docente']);
              break;
            case 'admin':
              this.router.navigate(['/dashboard-admin']);
              break;
            default:
              break;
          }
        },
        error => {
          console.error('Login error:', error);
        }
      );
    }
  }
}
