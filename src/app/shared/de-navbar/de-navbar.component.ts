import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'app-de-navbar',
    standalone: true,
    imports: [
        RouterModule, CommonModule
    ],
    templateUrl: './de-navbar.component.html',
    styleUrl: './de-navbar.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeNavbarComponent {
  constructor(private Router: Router, private authService: AuthService) { }

  isActive(path: string) {
    return this.Router.url === path || this.Router.url.startsWith(path + '/');
  }

  logout(): void {
    this.authService.logout().subscribe(() => {
      this.Router.navigate(['/auth/login']);
    });
  }
}
