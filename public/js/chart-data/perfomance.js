Highcharts.chart('perfomance', {
    chart: {
        backgroundColor: 'transparent',
        type: 'column'
    },
    title: {
        text: 'Delivery performance',
		style: {
            color: '#12263f'
        }
    },
    subtitle: {
        text: 'Comparisons between delivery statuses',
		style: {
            color: '#12263f'
        }
    },
	 legend: {
        enabled: true,
        backgroundColor: 'transparent',
		 color: '#12263f',
		  itemStyle: {
//                 fontSize:'35px',
//                 font: '35pt Trebuchet MS, Verdana, sans-serif',
                 color: '#12263f'
              },
              itemHoverStyle: {
                 color: 'white'
              },
              itemHiddenStyle: {
                 color: '#444'
              },
        style: {
            color: '#12263f',

        }
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        crosshair: true
    },
    yAxis: {

        gridLineColor: '#95aac9',
        gridLineDashStyle: 'ShortDot',
        gridLineWidth: 0.3,
        min: 0,

        title: {
            text: 'Requisitions Cost in KES',
            labels: {
                style: {
                    color: '#12263f'
                }
            }
        },
        stackLabels: {
            enabled: false,
            style: {
                fontWeight: 'bold',
                color: '#12263f'
            }
        }

    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>KES {point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Replaced',
        color: '#1aadce',
        data: [8306, 7808, 9805, 9304, 10600, 8405, 10500, 10403, 9102, 8305, 10606, 9203]

    }, {
        name: 'Returned',
        color: '#FC1808',
        data: [4809, 3808, 3903, 4104, 4700, 4803, 5900, 5906, 5204, 6502, 5903, 5102]

    },{
        name: 'Received',
        color: '#09AF00',
        data: [4909, 7105, 10604, 12902, 14400, 17600, 13506, 14805, 21604, 19401, 9506, 5404]

    }, ]
});