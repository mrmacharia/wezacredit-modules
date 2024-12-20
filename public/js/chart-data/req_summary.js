// Make monochrome colors
var pieColors = ['#09AF00', '#1aadce', '#808080', '#FFFF00', '#FC1808', '#FF7430'];

// Create the chart
Highcharts.chart('reqsummary', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        backgroundColor: 'transparent',
        type: 'pie'
    },
    title: {
        text: 'Procurement processes'
    },
    subtitle: {
        text: 'Representation of procurement processes statuses in percentages',
		style: {
            color: '#12263f'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                distance: -40,
                color: 'white',
                format: '<b>{point.percentage:.1f}% <br> {point.name}</b>'
            }
        }
    },
    series: [{
        name: 'Procurement Processes Status',
        colorByPoint: true,
        data: [{
            name: 'Requisitions',
            y: 40,
            sliced: true,
            selected: true
        }, {
            name: 'Quotations',
            y: 50
        }, {
            name: 'Purchase Order',
            y: 10
        }, {
            name: 'Goods Received',
            y: 40
        }, {
            name: 'Delivery Note',
            y: 10
        }, {
            name: 'Invoice',
            y: 40
        }, {
            name: 'Receipt',
            y: 30
        }]
    }]
});