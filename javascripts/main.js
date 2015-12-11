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
          ['New York', '$1,000,232', '$1,050,232', '$1,100,232', '$1,300,232'],
          ['Boston', '$1,800,232', '$1,200,232', '$1,700,232', '$1,100,232'],
          ['Philadelphia', '$1,330,232', '$1,870,232', '$2,500,232', '$1,065,232'],
        ]
      },
      axis: {
        x: {
          type: 'timeseries'
        }
      }
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
