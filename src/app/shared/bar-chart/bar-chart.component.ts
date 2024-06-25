// bar-chart.component.ts
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Chart, ChartOptions, ChartData, registerables, ChartType } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  @Input() chartData!: ChartData;
  @Input() chartOptions!: ChartOptions;
  @ViewChild('myChart', { static: true }) myChart!: ElementRef<HTMLCanvasElement>;

  ngOnInit(): void {
    this.createChart();
  }

  ngOnChanges(): void {
    this.createChart();
  }

  createChart(): void {
    if (this.myChart) {
      const ctx = this.myChart.nativeElement.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'bar',
          data: this.chartData,
          options: this.chartOptions
        });
      }
    }
  }
}
