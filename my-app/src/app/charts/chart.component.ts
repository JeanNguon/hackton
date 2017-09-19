import * as c3 from 'c3';
import { Component } from '@angular/core';

@Component({
    selector: 'chart',
    templateUrl: 'chart.component.html'
})
export class ChartComponent {
    ngOnInit() {
        let chart = c3.generate({
            bindto: '#chart',
            data: {
            columns: [
                ['data1', 30, 200, 100, 400, 150, 250],
                ['data2', 50, 20, 10, 40, 15, 25]
            ]
            }
        });
        console.log(chart);
    }

}
