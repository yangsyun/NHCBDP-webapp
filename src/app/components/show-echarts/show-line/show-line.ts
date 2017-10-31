import {Component, ElementRef,  OnInit,  ViewChild} from '@angular/core';
import * as echarts from 'echarts';
import ECharts = echarts.ECharts;


@Component({
    selector: 'app-show-line',
    templateUrl: './show-line.html',
    styleUrls: ['./show-line.scss']
})

export class ShowLineComponent implements OnInit  {

  @ViewChild('canvas')
  canvas: ElementRef;

  constructor() {
  }

  ngOnInit() {
    echarts.dispose(this.canvas.nativeElement);
    const chart = echarts.init(this.canvas.nativeElement);
    chart.setOption(this.getOption());
  }

  getOption(): any {
    const category = [];
    let dottedBase = +new Date();
    const lineData = [];
    const barData = [];

    for (let i = 0; i < 20; i++) {
      const date = new Date(dottedBase += 1000 * 3600 * 24);
      category.push([
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
      ].join('-'));
      const b = Math.random() * 200;
      const d = Math.random() * 200;
      barData.push(b);
      lineData.push(d + b);
    }

    return {
      backgroundColor: '#0f375f',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          label: {
            show: true,
            backgroundColor: '#333'
          }
        }
      },
      legend: {
        data: ['line', 'bar'],
        textStyle: {
          color: '#ccc'
        }
      },
      xAxis: {
        data: category,
        axisLine: {
          lineStyle: {
            color: '#ccc'
          }
        }
      },
      yAxis: {
        splitLine: {show: false},
        axisLine: {
          lineStyle: {
            color: '#ccc'
          }
        }
      },
      series: [{
        name: 'line',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 15,
        data: lineData
      }, {
        name: 'bar',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
          normal: {
            barBorderRadius: 5,
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: '#14c8d4'},
                {offset: 1, color: '#43eec6'}
              ]
            )
          }
        },
        data: barData
      }, {
        name: 'line',
        type: 'bar',
        barGap: '-100%',
        barWidth: 10,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: 'rgba(20,200,212,0.5)'},
                {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
                {offset: 1, color: 'rgba(20,200,212,0)'}
              ]
            )
          }
        },
        z: -12,
        data: lineData
      }, {
        name: 'dotted',
        type: 'pictorialBar',
        symbol: 'rect',
        itemStyle: {
          normal: {
            color: '#0f375f'
          }
        },
        symbolRepeat: true,
        symbolSize: [12, 4],
        symbolMargin: 1,
        z: -10,
        data: lineData
      }]
    };
  }


}

