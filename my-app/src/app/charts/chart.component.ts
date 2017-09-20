import * as c3 from 'c3';
import { Component } from '@angular/core';


@Component({
    selector: 'chart',
    templateUrl: 'chart.component.html',
    styleUrls: ['chart.component.css']
})
export class ChartComponent {
    ngOnInit() {
        let chart = c3.generate({
            bindto: '#chart1',
            data: {
                x: 'x',
                columns: [
                    ['x', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
                    [
                        "nombre d'alertes par an",
                        "1001",
                        "1905",
                        "2216",
                        "3023",
                        "3342",
                        "4090",
                        "4075",
                        "5295",
                        "3956",
                        "4788",
                        "1971",
                    ]
                ]
            }
        });


        setTimeout(function () {
            chart.unload({
                ids: 'data1'
            });
            chart.unload({
                ids: 'data2'
            });
        }, 2500);
        // ----------------------donuts------------------------------------------------------
        let donuts = c3.generate({
            data: {
                columns: [

                    ["sujets", "2"],
                    ["Animation", "1249"],
                    ["Animation jeunesse", "399"],
                    ["Art de la scène", "494"],
                    ["Arts de la scène", "5441"],
                    ["Audiovisuel", "2541"],
                    ["Autobiographie", "14"],
                    ["Biographie", "156"],
                    ["Conférence", "843"],
                    ["Divers", "6279"],
                    ["Exposition", "2811"],
                    ["Exposition (ou tourisme?)", "1"],
                    ["Jeunesse", "519"],
                    ["Littérature", "5400"],
                    ["Œuvres", "1"],
                    ["Olivier Monssens", "1"],
                    ["Politique", "284"],
                    ["Sciences et techniques", "2017"],
                    ["Tourisme", "3198"],
                    ["(vide)", "4062"]

                ],
                type: 'donut',
                onclick: function (d, i) { console.log("onclick", d, i); },
                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            },
            donut: {
                title: "Sujet"
            }
        });


        //----------------------------------------------------------------------------------------
        let gauge = c3.generate({
            data: {
                columns: [
                    ['data', 43.98765082]
                ],
                type: 'gauge',
                onclick: function (d, i) { console.log("onclick", d, i); },
                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            },
            gauge: {
                //        label: {
                //            format: function(value, ratio) {
                //                return value;
                //            },
                //            show: false // to turn off the min/max labels.
                //        },
                //    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
                //    max: 100, // 100 is default
                //    units: ' %',
                //    width: 39 // for adjusting arc thickness
            },
            color: {
                pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
                threshold: {
                    //            unit: 'value', // percentage is default
                    //            max: 200, // 100 is default
                    values: [30, 60, 90, 100]
                }
            },
            size: {
                height: 180
            },
            bindto: '#chart3',
        });

        //----------------------------------------------------------------------------------------
        let gauge2 = c3.generate({
            data: {
                columns: [
                    ['data', 42.6]
                ],
                type: 'gauge',
                onclick: function (d, i) { console.log("onclick", d, i); },
                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            },
            gauge: {
                //        label: {
                //            format: function(value, ratio) {
                //                return value;
                //            },
                //            show: false // to turn off the min/max labels.
                //        },
                //    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
                //    max: 100, // 100 is default
                //    units: ' %',
                //    width: 39 // for adjusting arc thickness
            },
            color: {
                pattern: ['#F97600', '#F97600', '#F97600', '#F97600'], // the three color levels for the percentage values.
                threshold: {
                    //            unit: 'value', // percentage is default
                    //            max: 200, // 100 is default
                    values: [30, 60, 90, 100]
                }
            },
            size: {
                height: 180
            },
            bindto: '#chart4',
        });
    }
}

    


