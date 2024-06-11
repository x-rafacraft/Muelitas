import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DaNavbarComponent } from "../shared/da-navbar/da-navbar.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-dashboard-admin',
    standalone: true,
    imports: [
        CommonModule, DaNavbarComponent, RouterModule
    ],
    templateUrl: './dashboard-admin.component.html',
    styleUrl: './dashboard-admin.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardAdminComponent { }
