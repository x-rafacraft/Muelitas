import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DdNavbarComponent } from '../../shared/dd-navbar/dd-navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule, RouterModule, DdNavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

}
