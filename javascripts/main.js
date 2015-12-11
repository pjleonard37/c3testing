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
          position: 'bottom'
      }
  });
  var chart = c3.generate({
      bindto: '#line',
      data: {
        x: 'x',
        columns: [
          ['x', '2012', '2013', '2014', '2015']
          ['New York', 1000232, 1050232, 1100232, 1300232],
          ['Boston', 1800232, 1200232, 1700232, 1100232],
          ['Philadelphia', 1330232, 1870232, 2500232, 1065232]
        ]
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            format: '%Y'
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
        columns: [
            ['New York', 10],
            ['Boston', 20],
            ['Philadelphia', 30],
            ['Providence', 40],
            ['Baltimore', 50],
            ['Washington D.C.', 60],
        ],
        type: 'bar'
      },
      color: {
        pattern: ['#449AA2', '#364D6E', '#703F7D', '#ED871F', '#B5004A', '#744584', '#cfddb8', '#97AFD2']
      },
      legend: {
          position: 'bottom'
      }
  });
  var chart = c3.generate({
      bindto: '#stackedbar',
      data: {
        columns: [
            ['New York', 10],
            ['Boston', 20],
            ['Philadelphia', 30],
            ['Providence', 40],
            ['Baltimore', 50],
            ['Washington D.C.', 60],
        ],
        type: 'stackedbar'
      },
      color: {
        pattern: ['#449AA2', '#364D6E', '#703F7D', '#ED871F', '#B5004A', '#744584', '#cfddb8', '#97AFD2']
      },
      legend: {
          position: 'bottom'
      }
  });
})();
