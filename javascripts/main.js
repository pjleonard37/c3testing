console.log("loaded main.js");

(function() {
  var chart = c3.generate({
      bindto: '#pie',
      data: {
        columns: [
          ['New York', 10],
          ['Boston', 20],
          ['Philadelphia', 30],
          ['Providence', 40],
          ['Baltimore', 50],
          ['Washington D.C.', 60],
        ],
        type: 'pie'
      },
      color: {
        pattern: ['#449AA2', '#364D6E', '#703F7D', '#ED871F', '#B5004A', '#744584', '#cfddb8', '#97AFD2']
      },
      legend: {
          position: 'left'
      }
  });
  var chart = c3.generate({
      bindto: '#line',
      data: {
        x: 'x',
        columns: [
          ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04'],
          ['New York', 1000232, 1050232, 1100232, 1300232],
          ['Boston', 1800232, 1200232, 1700232, 1100232],
          ['Philadelphia', 1330232, 1870232, 2500232, 1065232]
        ]
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            format: '%Y-%m-%d'
          }
        }
      }
      ,
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
          ['New York', 1000232, 1050232, 1100232, 1300232],
          ['Boston', 1800232, 1200232, 1700232, 1100232],
          ['Philadelphia', 1330232, 1870232, 2500232, 1065232]
        ],
        type: 'bar'
      },
      axis: {
        x: {
          type: 'category',
        }
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
          ['New York', 1000232, 1050232, 1100232, 1300232],
          ['Boston', 1800232, 1200232, 1700232, 1100232],
          ['Philadelphia', 1330232, 1870232, 2500232, 1065232]
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
        }
      },
      color: {
        pattern: ['#449AA2', '#364D6E', '#703F7D', '#ED871F', '#B5004A', '#744584', '#cfddb8', '#97AFD2']
      },
      legend: {
          position: 'right'
      }
  });
})();
