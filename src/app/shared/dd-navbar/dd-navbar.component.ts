import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'app-dd-navbar',
    standalone: true,
    imports: [
         RouterModule, CommonModule
    ],
    templateUrl: './dd-navbar.component.html',
    styleUrl: './dd-navbar.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DdNavbarComponent {
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
