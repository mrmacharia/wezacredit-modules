//=======================================================================================================================================================
/*revenue streams version two*/
//=======================================================================================================================================================
$(function() {

    // Create the chart
    $('#requisitionsBreakdown').highcharts({
        chart: {
            type: 'column',
            backgroundColor: 'transparent'
        },
        lang: {
            thousandsSep: ','
        },
        title: {
            text: "Procurement made by months",
            style: {
                color: '#12263f'
            }
        },
        yAxis: {
            gridLineColor: '#95aac9',
            gridLineDashStyle: 'ShortDot',
            gridLineWidth: 0.3,
            min: 0,
            title: {
                text: 'Total Procurement'
            },
            stackLabels: {
                enabled: false,
                style: {
                    fontWeight: 'bold',
                    color: '#12263f'
                }
            }
        },
        xAxis: {
            type: 'category'
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

        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: false,
                    style: {
                        color: 'white',
                        textShadow: '0 0 2px black, 0 0 2px black'
                    }
                },
                stacking: 'normal'
            }
        },

        plotOptions: {
            column: {
                stacking: 'normal',
                grouping: false,
                dataLabels: {
                    enabled: false
                },
                states: {
                    hover: {
                        enabled: false
                    }
                },
                //            point: {
                //                events: {
                //                    mouseOver: updateStackColor(0.2),
                //                    mouseOut: updateStackColor(0)
                //                }
                //            }

            },
            series: {
                //connectNulls: true

                pointWidth: 15,
                borderWidth: 0,
                borderColor: 'black',


            },
        },

        tooltip: {
            headerFormat: '<span style="font-size:16px; font-weight:800;">{series.name}</span><br>',
            //		useHTML: true,
            pointFormat: '<span  style="font-size:16px; font-weight:800; color:{point.color}">{point.name}</span>: <b style="color:{point.color}">KES {point.y}</b><br/>',
            formatter: function() {

                var point = this.point,
                    s = '<span style="font-size:14px; font-weight:600;  color:' + point.color + ';">' + this.series.name + '</span><br/><span style="color:' + point.color + '"><span  style="font-size:16px; font-weight:800; color:' + point.color + ';">' + point.name + '</span> :<b> KES ' + Highcharts.numberFormat(point.y, 0, '.', ',') + ' ' + '</span>';
                if (point.drilldown) {
                    s = '<span style="font-size:14px; font-weight:600;  color:' + point.color + ';">' + this.series.name + '</span><br/><p><span  style="font-size:16px; font-weight:800; color:' + point.color + ';">' + point.name + '</span> :<b> KES ' + Highcharts.numberFormat(point.y, 0, '.', ',') + ' (' + Highcharts.numberFormat(this.percentage, 0, '.', ',') + '%)</p><br/>';
                    s += '<p>Click to view <b>' + point.name + '</b> Procurement </p>';
                }
                return s;
            },
            crosshairs: true


        },

        series: [{
            //national bank collections by the months
            name: 'Schools',
            data: [{

                    name: 'Jan',
                    y: 5,
                    drilldown: 'schools-jan',
                    //color: '#e7c500' //yellow
                }, {
                    name: 'Feb',
                    y: 2,
                    drilldown: 'schools-feb',
                    //color: '#e7c500' //yellow
                }, {
                    name: 'Mar',
                    y: 4,
                    drilldown: 'schools-mar',
                    //color: '#e7c500' //yellow
                }, {

                    name: 'Apr',
                    y: 5,
                    drilldown: 'schools-apr',
                    //color: '#e7c500' //yellow
                }, {
                    name: 'May',
                    y: 2,
                    drilldown: 'schools-may',
                    //color: '#e7c500' //yellow
                }, {
                    name: 'Jun',
                    y: 4,
                    drilldown: 'schools-jun',
                    //color: '#e7c500' //yellow
                }, {

                    name: 'Jul',
                    y: 5,
                    drilldown: 'schools-jul',
                    //color: '#e7c500' //yellow
                }, {
                    name: 'Aug',
                    y: 12,
                    drilldown: 'schools-aug',
                    //color: '#e7c500' //yellow
                }, {
                    name: 'Sep',
                    y: 4,
                    drilldown: 'schools-sep',
                    //color: '#e7c500' //yellow
                }, {

                    name: 'Oct',
                    y: 15,
                    drilldown: 'schools-oct',
                    //color: '#e7c500' //yellow
                }, {
                    name: 'Nov',
                    y: 2,
                    drilldown: 'schools-nov',
                    //color: '#e7c500' //yellow
                }, {
                    name: 'Dec',
                    y: 4,
                    drilldown: 'schools-dec',
                    //color: '#e7c500' //yellow
                }]
                //end of schools fee collections
        }, {
            //land rate collections
            name: 'Companies',
            data: [{
                    name: 'Jan',
                    y: 11,
                    drilldown: 'companies-jan',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Feb',
                    y: 5,
                    drilldown: 'companies-feb',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Mar',
                    y: 2,
                    drilldown: 'companies-mar',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Apr',
                    y: 1,
                    drilldown: 'companies-apr',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'May',
                    y: 5,
                    drilldown: 'companies-may',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Jun',
                    y: 21,
                    drilldown: 'companies-jun',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Jul',
                    y: 11,
                    drilldown: 'companies-jul',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Aug',
                    y: 5,
                    drilldown: 'companies-aug',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Sep',
                    y: 2,
                    drilldown: 'companies-sep',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Oct',
                    y: 1,
                    drilldown: 'companies-oct',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Nov',
                    y: 5,
                    drilldown: 'companies-nov',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Dec',
                    y: 2,
                    drilldown: 'companies-dec',
                    //color: '#0aae8f' // blue
                }]
                //end of landrate collections
        }, {
            //SBP collections
            name: 'Co-operative',
            data: [{
                    name: 'Jan',
                    y: 16,
                    drilldown: 'coop-jan',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Feb',
                    y: 15,
                    drilldown: 'coop-feb',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Mar',
                    y: 3,
                    drilldown: 'coop-mar',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Apr',
                    y: 1,
                    drilldown: 'coop-apr',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'May',
                    y: 5,
                    drilldown: 'coop-may',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Jun',
                    y: 2,
                    drilldown: 'coop-jun',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Jul',
                    y: 11,
                    drilldown: 'coop-jul',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Aug',
                    y: 5,
                    drilldown: 'coop-aug',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Sep',
                    y: 2,
                    drilldown: 'coop-sep',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Oct',
                    y: 1,
                    drilldown: 'coop-oct',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Nov',
                    y: 5,
                    drilldown: 'coop-nov',
                    //color: '#0aae8f' // blue
                }, {
                    name: 'Dec',
                    y: 2,
                    drilldown: 'coop-dec',
                    //color: '#0aae8f' // blue
                }]
                //end of SBP collections
        }],
        drilldown: {
            activeDataLabelStyle: {
                color: 'white',
                textShadow: '0 0 2px black, 0 0 2px black'
            },
            series: [
                //schools collections by months and dates
                {
                    id: 'schools-jan',
                    name: 'schools collections in January 2020',
                    data: [
                        ['1st Jan', 4],
                        ['2nd Jan', 2],
                        ['3rd Jan', 1],
                        ['4th Jan', 2],
                        ['5th Jan', 1]
                    ]
                }, {
                    id: 'schools-feb',
                    name: 'schools collections in February 2020',
                    data: [
                        ['1st Feb', 4],
                        ['2nd Feb', 2]
                    ]
                }, {
                    id: 'schools-mar',
                    name: 'schools collections in March 2020',
                    data: [
                        ['1st Mar', 4],
                        ['2nd Mar', 2],
                        ['3rd Mar', 2]
                    ]
                }, {
                    id: 'schools-apr',
                    name: 'schools collections in April 2020',
                    data: [
                        ['1st Apr', 4],
                        ['2nd Apr', 2],
                        ['3rd Apr', 1],
                        ['4th Apr', 2],
                        ['5th Apr', 1]
                    ]
                }, {
                    id: 'schools-may',
                    name: 'schools collections in May 2020',
                    data: [
                        ['1st May', 4],
                        ['2nd May', 2]
                    ]
                }, {
                    id: 'schools-jun',
                    name: 'schools collections in June 2020',
                    data: [
                        ['1st Jun', 4],
                        ['2nd Jun', 2],
                        ['3rd Jun', 2]
                    ]
                }, {
                    id: 'schools-jul',
                    name: 'schools collections in July 2020',
                    data: [
                        ['1st Jul', 4],
                        ['2nd Jul', 2],
                        ['3rd Jul', 1],
                        ['4th Jul', 2],
                        ['5th Jul', 1]
                    ]
                }, {
                    id: 'schools-aug',
                    name: 'schools collections in Auust 2020',
                    data: [
                        ['1st aug', 4],
                        ['2nd aug', 2]
                    ]
                }, {
                    id: 'schools-sep',
                    name: 'schools collections in September 2020',
                    data: [
                        ['1st sep', 4],
                        ['2nd sep', 2],
                        ['3rd sep', 2]
                    ]
                }, {
                    id: 'schools-oct',
                    name: 'schools collections in October 2020',
                    data: [
                        ['1st Oct', 4],
                        ['2nd Oct', 2],
                        ['3rd Oct', 1],
                        ['4th Oct', 2],
                        ['5th Oct', 1]
                    ]
                }, {
                    id: 'schools-nov',
                    name: 'schools collections in November 2020',
                    data: [
                        ['1st Nov', 4],
                        ['2nd Nov', 2]
                    ]
                }, {
                    id: 'schools-dec',
                    name: 'schools collections in December  2020',
                    data: [
                        ['1st Dec', 4],
                        ['2nd Dec', 2],
                        ['3rd Dec', 2]
                    ]
                },

                //end of schools collections by months and dates

                //start of Boresha collections by months and dates
                {
                    id: 'companies-jan',
                    name: 'Landrates revenue collections for January 2020',
                    data: [
                        ['1st Jan', 3],
                        ['2nd Jan', 5],
                        ['3rd Jan', 6],
                        ['4th Jan', 2],
                        ['5th Jan', 2]
                    ]
                }, {
                    id: 'companies-feb',
                    name: 'Landrates revenue collections for February 2020',
                    data: [
                        ['1st Feb', 1],
                        ['2nd Feb', 5]
                    ]
                }, {
                    id: 'companies-mar',
                    name: 'Landrates revenue collections for March 2020',
                    data: [
                        ['1st Mar', 2],
                        ['2nd Mar', 3],
                        ['3rd Mar', 2]
                    ]
                }, {
                    id: 'companies-apr',
                    name: 'Landrates revenue collections for April 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Apr', 2],
                        ['2nd Apr', 3],
                        ['3rd Apr', 1],
                        ['4th Apr', 1],
                        ['5th Apr', 1]
                    ]
                }, {
                    id: 'companies-may',
                    name: 'Landrates revenue collections for May 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st May', 4],
                        ['2nd May', 3]
                    ]
                }, {
                    id: 'companies-jun',
                    name: 'Landrates revenue collections for June 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Jun', 4],
                        ['2nd Jun', 3],
                        ['3rd jun', 3]
                    ]
                }, {
                    id: 'companies-jul',
                    name: 'Landrates revenue collections for July 2020',
                    data: [
                        ['1st Jul', 3],
                        ['2nd Jul', 5],
                        ['3rd Jul', 6],
                        ['4th Jul', 2],
                        ['5th Jul', 2]
                    ]
                }, {
                    id: 'companies-aug',
                    name: 'Landrates revenue collections for August 2020',
                    data: [
                        ['1st Aug', 1],
                        ['2nd Aug', 5]
                    ]
                }, {
                    id: 'companies-sep',
                    name: 'Landrates revenue collections for September 2020',
                    data: [
                        ['1st Sep', 2],
                        ['2nd Sep', 3],
                        ['3rd Sep', 2]
                    ]
                }, {
                    id: 'companies-oct',
                    name: 'Landrates revenue collections for October 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Oct', 2],
                        ['2nd Oct', 3],
                        ['3rd Oct', 1],
                        ['4th Oct', 1],
                        ['5th Oct', 1]
                    ]
                }, {
                    id: 'companies-nov',
                    name: 'Landrates revenue collections for November 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st Nov', 4],
                        ['2nd Nov', 3]
                    ]
                }, {
                    id: 'companies-dec',
                    name: 'Landrates revenue collections for December 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Dec', 4],
                        ['2nd Dec', 3],
                        ['3rd Dec', 3]
                    ]
                },

                //start of SBP daily collections
                {
                    id: 'coop-dec',
                    name: 'SBP collections for December 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Dec', 4],
                        ['2nd Dec', 3],
                        ['3rd Dec', 3]
                    ]
                }, {
                    id: 'coop-jan',
                    name: 'SBP collections for January 2020',
                    data: [
                        ['1st Jan', 3],
                        ['2nd Jan', 5],
                        ['3rd Jan', 6],
                        ['4th Jan', 2],
                        ['5th Jan', 2]
                    ]
                }, {
                    id: 'coop-feb',
                    name: 'SBP collections for February 2020',
                    data: [
                        ['1st Feb', 1],
                        ['2nd Feb', 5]
                    ]
                }, {
                    id: 'coop-mar',
                    name: 'SBP collections for March 2020',
                    data: [
                        ['1st Mar', 2],
                        ['2nd Mar', 3],
                        ['3rd Mar', 2]
                    ]
                }, {
                    id: 'coop-apr',
                    name: 'Landrates revenue collections for April 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Apr', 2],
                        ['2nd Apr', 3],
                        ['3rd Apr', 1],
                        ['4th Apr', 1],
                        ['5th Apr', 1]
                    ]
                }, {
                    id: 'coop-may',
                    name: 'SBP collections for May 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st May', 4],
                        ['2nd May', 3]
                    ]
                }, {
                    id: 'coop-jun',
                    name: 'SBP collections for June 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Jun', 4],
                        ['2nd Jun', 3],
                        ['3rd jun', 3]
                    ]
                }, {
                    id: 'coop-jul',
                    name: 'SBP collections for July 2020',
                    data: [
                        ['1st Jul', 3],
                        ['2nd Jul', 5],
                        ['3rd Jul', 6],
                        ['4th Jul', 2],
                        ['5th Jul', 2]
                    ]
                }, {
                    id: 'coop-aug',
                    name: 'SBP collections for August 2020',
                    data: [
                        ['1st Aug', 1],
                        ['2nd Aug', 5]
                    ]
                }, {
                    id: 'coop-sep',
                    name: 'SBP collections for September 2020',
                    data: [
                        ['1st Sep', 2],
                        ['2nd Sep', 3],
                        ['3rd Sep', 2]
                    ]
                }, {
                    id: 'coop-oct',
                    name: 'SBP collections for October 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Oct', 2],
                        ['2nd Oct', 3],
                        ['3rd Oct', 1],
                        ['4th Oct', 1],
                        ['5th Oct', 1]
                    ]
                },
                {
                    id: 'coop-nov',
                    name: 'SBP collections for October 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Oct', 2],
                        ['2nd Oct', 3],
                        ['3rd Oct', 1],
                        ['4th Oct', 1],
                        ['5th Oct', 1]
                    ]
                },
                //end of SBP collections

                //start of market fee collections
                {
                    id: 'market-jan',
                    name: 'Market fee collections for January 2020',
                    data: [
                        ['1st Jan', 3],
                        ['2nd Jan', 5],
                        ['3rd Jan', 6],
                        ['4th Jan', 2],
                        ['5th Jan', 2]
                    ]
                }, {
                    id: 'market-feb',
                    name: 'Market fee collections for February 2020',
                    data: [
                        ['1st Feb', 1],
                        ['2nd Feb', 5]
                    ]
                }, {
                    id: 'market-mar',
                    name: 'Market fee collections for March 2020',
                    data: [
                        ['1st Mar', 2],
                        ['2nd Mar', 3],
                        ['3rd Mar', 2]
                    ]
                }, {
                    id: 'market-apr',
                    name: 'Market fee collections for April 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Apr', 2],
                        ['2nd Apr', 3],
                        ['3rd Apr', 1],
                        ['4th Apr', 1],
                        ['5th Apr', 1]
                    ]
                }, {
                    id: 'market-may',
                    name: 'Market fee collections for May 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st May', 4],
                        ['2nd May', 3]
                    ]
                }, {
                    id: 'market-jun',
                    name: 'Market fee collections for June 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Jun', 4],
                        ['2nd Jun', 3],
                        ['3rd jun', 3]
                    ]
                }, {
                    id: 'market-jul',
                    name: 'Market fee collections for July 2020',
                    data: [
                        ['1st Jul', 3],
                        ['2nd Jul', 5],
                        ['3rd Jul', 6],
                        ['4th Jul', 2],
                        ['5th Jul', 2]
                    ]
                }, {
                    id: 'market-aug',
                    name: 'Market fee collections for August 2020',
                    data: [
                        ['1st Aug', 1],
                        ['2nd Aug', 5]
                    ]
                }, {
                    id: 'market-sep',
                    name: 'Market fee collections for September 2020',
                    data: [
                        ['1st Sep', 2],
                        ['2nd Sep', 3],
                        ['3rd Sep', 2]
                    ]
                }, {
                    id: 'market-oct',
                    name: 'Market fee collections for October 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Oct', 2],
                        ['2nd Oct', 3],
                        ['3rd Oct', 1],
                        ['4th Oct', 1],
                        ['5th Oct', 1]
                    ]
                }, {
                    id: 'market-nov',
                    name: 'Market fee collections for November 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st Nov', 4],
                        ['2nd Nov', 3]
                    ]
                }, {
                    id: 'market-dec',
                    name: 'Market fee collections for December 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Dec', 4],
                        ['2nd Dec', 3],
                        ['3rd Dec', 3]
                    ]
                },

                // end of market fees
                //start of house and stall rents
                {
                    id: 'rent-jan',
                    name: 'house & stall rents for January 2020',
                    data: [
                        ['1st Jan', 3],
                        ['2nd Jan', 5],
                        ['3rd Jan', 6],
                        ['4th Jan', 2],
                        ['5th Jan', 2]
                    ]
                }, {
                    id: 'rent-feb',
                    name: 'house & stall rents for February 2020',
                    data: [
                        ['1st Feb', 1],
                        ['2nd Feb', 5]
                    ]
                }, {
                    id: 'rent-mar',
                    name: 'house & stall rents for March 2020',
                    data: [
                        ['1st Mar', 2],
                        ['2nd Mar', 3],
                        ['3rd Mar', 2]
                    ]
                }, {
                    id: 'rent-apr',
                    name: 'house & stall rents for April 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Apr', 2],
                        ['2nd Apr', 3],
                        ['3rd Apr', 1],
                        ['4th Apr', 1],
                        ['5th Apr', 1]
                    ]
                }, {
                    id: 'rent-may',
                    name: 'house & stall rents for May 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st May', 4],
                        ['2nd May', 3]
                    ]
                }, {
                    id: 'rent-jun',
                    name: 'house & stall rents for June 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Jun', 4],
                        ['2nd Jun', 3],
                        ['3rd jun', 3]
                    ]
                }, {
                    id: 'rent-jul',
                    name: 'house & stall rents for July 2020',
                    data: [
                        ['1st Jul', 3],
                        ['2nd Jul', 5],
                        ['3rd Jul', 6],
                        ['4th Jul', 2],
                        ['5th Jul', 2]
                    ]
                }, {
                    id: 'rent-aug',
                    name: 'house & stall rents for August 2020',
                    data: [
                        ['1st Aug', 1],
                        ['2nd Aug', 5]
                    ]
                }, {
                    id: 'rent-sep',
                    name: 'house & stall rents for September 2020',
                    data: [
                        ['1st Sep', 2],
                        ['2nd Sep', 3],
                        ['3rd Sep', 2]
                    ]
                }, {
                    id: 'rent-oct',
                    name: 'house & stall rents for October 2020',
                    /*   stack: 1, */
                    data: [
                        ['1st Oct', 2],
                        ['2nd Oct', 3],
                        ['3rd Oct', 1],
                        ['4th Oct', 1],
                        ['5th Oct', 1]
                    ]
                }, {
                    id: 'rent-nov',
                    name: 'house & stall rents for November 2020',
                    /*  stack: 1, */
                    data: [
                        ['1st Nov', 4],
                        ['2nd Nov', 3]
                    ]
                }, {
                    id: 'rent-dec',
                    name: 'house & stall rents for December 2020',
                    /* stack: 1, */
                    data: [
                        ['1st Dec', 4],
                        ['2nd Dec', 3],
                        ['3rd Dec', 3]
                    ]
                },

            ]
        }
    })
});
//========================================================================================================================================================
/*revenue streams version two*/
//=======================================================================================================================================================

