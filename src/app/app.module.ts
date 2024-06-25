import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './shared/bar-chart/bar-chart.component';
import { NgChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [BarChartComponent],
  imports: [CommonModule, NgChartsModule],
  exports: [BarChartComponent]
})
export class BarChartModule { }
