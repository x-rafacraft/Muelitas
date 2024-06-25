// home.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DdNavbarComponent } from '../../shared/dd-navbar/dd-navbar.component';
import { CitaService } from '../../services/cita.service';
import { ChartData, ChartOptions } from 'chart.js';
import { BarChartModule } from '../../app.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, DdNavbarComponent, BarChartModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export default class HomeComponent implements OnInit {
  citaCount: number = 0;
  odontologoChartData!: ChartData;
  sedeChartData!: ChartData;
  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Citas'
      }
    }
  };

  constructor(private citaService: CitaService) {}

  ngOnInit(): void {
    this.citaService.getCitaCount().subscribe(count => {
      this.citaCount = count;
    });

    this.citaService.getCitaList().subscribe(citas => {
      const odontologoData = this.groupBy(citas, 'odontologo');
      const sedeData = this.groupBy(citas, 'sede');

      this.odontologoChartData = {
        labels: Object.keys(odontologoData),
        datasets: [{
          label: 'Citas por Odontólogo',
          data: Object.values(odontologoData),
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      };

      this.sedeChartData = {
        labels: Object.keys(sedeData),
        datasets: [{
          label: 'Citas por Sede',
          data: Object.values(sedeData),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      };
    });
  }

  private groupBy(array: any[], key: string) {
    return array.reduce((result, currentValue) => {
      const groupKey = currentValue[key];
      if (!result[groupKey]) {
        result[groupKey] = 0;
      }
      result[groupKey]++;
      return result;
    }, {});
  }
}
