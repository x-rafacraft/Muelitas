import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

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
  constructor(private router: Router) { }

  isActive(path: string) {
    return this.router.url === path || this.router.url.startsWith(path + '/');
  }
 }
