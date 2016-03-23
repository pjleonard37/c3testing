console.log("loaded main.js");

(function() {
  console.log("function");
  var myChartType = "linechart";
  var myChartID = "13SN1M6K1lbkmME6b5x1rigC2ps52w3NNqjMX7cnGTGU";
  var myChartGid = 300047528;
  var myxTitle = "xtitle";
  var myyTitle = "ytitle";
  var myLegend = "bottom";
  var myDirection = "";
  var myStacked = "";
  var myFilled = "";
  var randomId = "pie";
  var colorvalue = ["#501010", "#901010", "#211010", "#108710", "#108710", "#101650", "#101056", "#101560"];
  var thisColColor;
  for (var i = 1; i < 9; i++) {
    colorvalue.push($(this).data('col' + i));
  }
  var myURL = "https://spreadsheets.google.com/feeds/list/" + myChartID + "/1/public/values?alt=json";
  //https://spreadsheets.google.com/feeds/list/13SN1M6K1lbkmME6b5x1rigC2ps52w3NNqjMX7cnGTGU/4/public/values?alt=json
//  var myURL = "https://spreadsheets.google.com/feeds/list/" + myChartID + "/od6/public/values?gid=" + myChartGid + "&alt=json";
  console.log(myURL);
  $.getJSON(myURL, function (data) {
    for (var i = 0; i < data.feed.entry.length; i++) {
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
      var rotated = false;
      if (myDirection === 'Horizontal')
      {
        rotated = true;
      }
      if (myStacked === 'False') {
        datacategories = [];
      }
      var linetype = 'line';
      if (myFilled === 'True') {
        linetype = 'area';
      }
      switch (myChartType) {
        case 'piechart' :
          var chart = c3.generate({
            bindto: document.getElementById(randomId),
            data: {
              x: 'x',
              columns: dataarray,
              names: labelobject,
              type: 'pie'
            },
            color: {
              pattern: colorvalue
            },
            legend: {
              position: myLegend
            }
          });
          break;
        case 'linechart' :
          var chart = c3.generate({
            bindto: document.getElementById(randomId),
            data: {
              x: 'x',
              columns: dataarray,
              names: labelobject,
              type: linetype,
              groups: [datacategories]
            },
            axis: {
              x: {
                label: {
                  text: myxTitle,
                  position: 'outer-center'
                }
              },
              y: {
                label: {
                  text: myyTitle,
                  position: 'outer-middle'
                },
                // tick: {
                //     format: d3.format("$,.2r")
                // }
              },
              rotated: rotated
            },
            color: {
              pattern: colorvalue
            },
            legend: {
              position: myLegend
            }
          });
          break;
        case 'barchart' :
          var chart = c3.generate({
            bindto: document.getElementById(randomId),
            data: {
              x: 'x',
              columns: dataarray,
              names: labelobject,
              type: 'bar',
              groups: [datacategories]
            },
            axis: {
              x: {
                label: {
                  text: myxTitle,
                  position: 'outer-center'
                }
              },
              y: {
                label: {
                  text: myyTitle,
                  position: 'outer-middle'
                }
              },
              tick: {
                  format: d3.format("$,.2r")
              },
              rotated: rotated
            },
            color: {
              pattern: colorvalue
            },
            legend: {
              position: myLegend
            }
          });
          break;
        case 'tablechart' :
          break;
      }
    }
  });
})(); // each function
