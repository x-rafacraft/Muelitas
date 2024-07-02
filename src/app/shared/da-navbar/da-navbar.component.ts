import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-da-navbar',
  standalone: true,
  imports: [
    CommonModule, RouterModule
  ],
  templateUrl: './da-navbar.component.html',
  styleUrls: ['./da-navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaNavbarComponent {
  constructor(private router: Router, private authService: AuthService) { }

  isActive(path: string) {
    return this.router.url === path || this.router.url.startsWith(path + '/');
  }

  logout(): void {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/auth/login']);
    });
  }
}
