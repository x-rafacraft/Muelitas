import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

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
  constructor(private router: Router) { }

  isActive(path: string) {
    return this.router.url === path || this.router.url.startsWith(path + '/');
  }
}
