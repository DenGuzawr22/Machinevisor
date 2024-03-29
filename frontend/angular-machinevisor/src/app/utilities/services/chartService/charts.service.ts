import { Injectable } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { APIService } from '../APIService/api.service';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {
 
  constructor(private apiService: APIService) { }

  public getChartsInfo(machineID: string){
    return this.apiService.getMachineCharts(machineID);
  }

  public getDatasetTemplate(values: number[], labels: string[], title: string){
    let copy = { ...this.blueLineTemplate};
    copy.data = values
    copy.label = title
    return {
      datasets: [copy],
      labels: labels
    } 
  }

  public readonly blueLineTemplate = {
    data: [0],
    label: 'Series',
    backgroundColor: 'rgba(0, 150, 214, 0.1)',
    borderColor: 'rgb(0, 150, 214)',
    pointBackgroundColor: 'rgba(0, 32, 68,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(0, 32, 68, 0.8)',
    fill: 'origin',
  }

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      x: {},
      'y-axis-0':
        {
          position: 'left', 
          beginAtZero: true
        }
    },

    plugins: {
      legend: { display: true },
    }
  };
}
