console.log("loaded main.js");

(function() {
  var chart = c3.generate({
      bindto: '#pie',
      data: {
        columns: [
          ['Democratic Practice', 10],
          ['Peacebuilding', 20],
          ['Sustainable Development', 30],
          ['Pivotal Place - New York City', 40],
          ['Pivotal Place - Souther China', 50],
          ['Pivotal Place - Western Balkans', 60],
          ['Special Initiative: Eqypt', 29],
          ['Other', 39],
        ],
        type: 'pie'
      },
      color: {
        pattern: ['#449AA2', '#364D6E', '#703F7D', '#ED871F', '#B5004A', '#744584', '#cfddb8', '#97AFD2']
      },
      legend: {
          position: 'right'
      }
  });
  var chart = c3.generate({
      bindto: '#line',
      data: {
        x: 'x',
        columns: [
          ['x', '2013-01-01', '2013-04-01', '2013-07-01', '2013-10-01', '2014-01-01', '2014-04-01', '2014-07-01', '2014-10-01', '2015-01-01', '2015-04-01', '2015-07-01', '2015-10-01'],
          ['New York', 1000232, 1050232, 1100232, 1300232, 1000232, 1050532, 1432232, 1300232, 20232, 1085232, 1232, 105432],
          ['Boston', 1800232, 1200232, 1700232, 1100232, 1080232, 1050232, 1102232, 1300232, 25002, 106542, 100532, 1050232],
          ['Philadelphia', 1330232, 1870232, 2500232, 1065232, 1000252, 1050232, 113232, 130032, 2566232, 1065232, 1005432, 10472]
        ]
      },
      regions: [
        {start:'2013-01-01', end:'2013-10-01', class:'r2013'},
        {start:'2014-01-01', end:'2014-10-01', class:'r2014'},
        {start:'2015-01-01', end:'2015-10-01', class:'r2015'}
      ],
      axis: {
        x: {
          type: 'timeseries',
          label: {
            text: 'Investment Year',
            position: 'outer-center'
          },
          tick: {
            values: ['2013-04-01', '2014-04-01', '2015-04-01'],
            format: '%Y'
          }
        },
        y: {
          label: {
            text: 'Infrastructure Investment',
            position: 'outer-middle'
          }
        }
      },
      color: {
        pattern: ['#449AA2', '#364D6E', '#703F7D', '#ED871F', '#B5004A', '#744584', '#cfddb8', '#97AFD2']
      },
      legend: {
          position: 'bottom'
      }
  });
  var chart = c3.generate({
      bindto: '#bar',
      data: {
        x: 'x',
        columns: [
          ['x', 'Bicyclists', 'Pedestrians', 'Cars', 'Boats'],
          ['New York', 1000, 1032, 4232, 132],
          ['Boston', 182, 1262, 1782, 1562],
          ['Philadelphia', 1232, 785, 4560, 1092]
        ],
        type: 'bar'
      },
      axis: {
        x: {
          type: 'category',
          label: {
            text: 'Vehicle Type',
            position: 'outer-center'
          }
        },
        y: {
          label: {
            text: 'Vehicle Count',
            position: 'outer-middle'
          }
        },
      },
      color: {
        pattern: ['#449AA2', '#364D6E', '#703F7D', '#ED871F', '#B5004A', '#744584', '#cfddb8', '#97AFD2']
      },
      legend: {
          position: 'right'
      }
  });
  var chart = c3.generate({
      bindto: '#stackedbar',
      data: {
        x: 'x',
        columns: [
          ['x', 'Bicyclists', 'Pedestrians', 'Cars', 'Boats'],
          ['New York', 1000, 1032, 4232, 132],
          ['Boston', 182, 1262, 1782, 1562],
          ['Philadelphia', 1232, 785, 4560, 1092]
        ],
        type: 'bar',
        groups: [
          ['New York', 'Boston', 'Philadelphia']
        ]
      },
      grid: {
        y: {
          lines: [{value:0}]
        }
      },
      axis: {
        x: {
          type: 'category',
          label: {
            text: 'Vehicle Type',
            position: 'outer-center'
          }
        },
        y: {
          label: {
            text: 'Vehicle Count',
            position: 'outer-middle'
          }
        },
      },
      color: {
        pattern: ['#449AA2', '#364D6E', '#703F7D', '#ED871F', '#B5004A', '#744584', '#cfddb8', '#97AFD2']
      },
      legend: {
          position: 'left'
      }
  });
})();
