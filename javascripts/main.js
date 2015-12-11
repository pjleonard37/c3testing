console.log("loaded main.js");

(function() {
  console.log("function sent");
  var spreadsheetID = "140f-u3YxCg3xlspx-xNWPbkXVPSHOOMopCWtsV-Wdao"
  var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
  console.log(url)
  $.getJSON(url,
    // function(data) {
    //   var entry = data.feed.entry;
    //
    //   var datap = [];
    //   console.log(entry);
    //   for (var i = 0; i < entry.length; i++) {
    //     datap.push([entry[i][gsx$regions].$t, entry[i][3].$t]);
    //   }
    //   console.log(datap);
    //   var chart = c3.generate({
    //       bindto: '#chart',
    //       data: {
    //         columns: datap,
    //         type: 'bar'
    //       },
    //       color: {
    //         pattern: ['#449AA2', '#364D6E', '#703F7D', '#ED871F', '#B5004A', '#744584', '#cfddb8', '#97AFD2']
    //       },
    //       legend: {
    //           position: 'bottom'
    //       }
    //   });
    // });
    function (data) {
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
      var datap = data.feed.entry;
      console.log(datap);
      var chart = c3.generate({
          bindto: '#chart',
          data: {
            json: datap,
            type: 'bar'
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
