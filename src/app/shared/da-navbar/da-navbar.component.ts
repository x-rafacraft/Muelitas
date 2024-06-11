import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    selector: 'app-da-navbar',
    standalone: true,
    imports: [
        CommonModule, RouterModule
    ],
    templateUrl: './da-navbar.component.html',
    styleUrl: './da-navbar.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaNavbarComponent {
  constructor(private router: Router) { }

  isActive(path: string) {
    return this.router.url === path || this.router.url.startsWith(path + '/');
  }
}
