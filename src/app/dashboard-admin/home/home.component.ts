import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DaNavbarComponent } from '../../shared/da-navbar/da-navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule, RouterModule, DaNavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

}
