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
})();
