console.log("loaded main.js");

// ID of the Google Spreadsheet


// Make sure it is public or set to Anyone with link can view

(function() {
  console.log("function sent");
  var spreadsheetID = "140f-u3YxCg3xlspx-xNWPbkXVPSHOOMopCWtsV-Wdao"
  var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
  console.log(url)
  $.getJSON(url,
    function (data) {
      // clean object received
      for (var i = 0; i < data.feed.entry.length; i++) {
          for (var key in data.feed.entry[i]) {
              if (data.feed.entry[i].hasOwnProperty(key) && key.substr(0,4) === 'gsx$') {
                  // copy the value in the key up a level and delete the original key
                  data.feed.entry[i][key.substr(4)] = data.feed.entry[i][key].$t;
                  delete data.feed.entry[i][key];
              }
              else
              {
                delete data.feed.entry[i][key];
              }
          }
      }

      //C3 Formatting
      var datap = data.feed.entry;
      var datacategories = Object.keys(datap[0]);
      var emptyarray = [];
      var dataarray = [];
      var labelobject = {};

      for (var i = 0; i < datacategories.length; i++)
      {
        emptyarray.push(datacategories[i]);
        for (var j = 0; j < datap.length; j++)
        {
          if (datap[j].hasOwnProperty(datacategories[i]))
          {
            emptyarray.push(datap[j][datacategories[i]]);
          }
        }
        dataarray.push(emptyarray);
        labelobject[emptyarray[0]] = emptyarray[emptyarray.length - 1];
        emptyarray = [];
      }

      //Chart Building
      var chart = c3.generate({
          bindto: '#chart',
          data: {
            x: 'x',
            columns: dataarray,
            names: labelobject,
            type: 'bar'
          },
          axis: {
            x: {
              type: 'timeseries',
              label: {
                text: 'Investment Year',
                position: 'outer-center'
              },
              tick: {
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
    });
})();
