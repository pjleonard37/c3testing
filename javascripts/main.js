console.log("loaded main.js");

// ID of the Google Spreadsheet


// Make sure it is public or set to Anyone with link can view

(function() {
  console.log("function sent");
  var spreadsheetID = ""
  var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json-in-script&callback=";
  console.log(url)
  $.getJSON(url, function(data) {
    console.log(data);
    var entry = data.feed.entry;
    console.log(entry);
    $(entry).each(function(){
     // Column names are name, age, etc.
     $('.results').prepend('<h2>'+this.gsx$name.$t+'</h2><p>'+this.gsx$age.$t+'</p>');
    });
  });
})();


var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: [
        ['data1', 30],
				['data2', 130],
				['data3', 230],
				['data4', 330],
				['data5', 430],
				['data6', 530],
				['data7', 630],
				['data8', 730],
				['data9', 830],
				['data10', 930],
				['data11', 130],
        ['data12', 50]
      ],
			type: 'pie'
			// },
			// axis: {
			// 	y: {
			// 		label: {
			// 			show: true,
			// 			text: 'Y Label',
			// 			position: 'outer-middle'
			// 		}
			// 	},
			// 	y2: {
			// 		show: true,
			// 		label: {
			// 			text: 'Y2 Label',
			// 			position: 'outer-middle'
			// 		}
			// 	}
			// }
    },
    color: {
      pattern: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
    },
    legend: {
        position: 'right'
    }
});


// Revealing Module Pattern
// Example from https://carldanley.com/js-revealing-module-pattern/

/*
var MyModule = (function(window, undefined){

	function myMethod(){
		alert('my Method');
	}

	function myOtherMethod(){
		alert('my other Method');
	}

	//return public methods explicitly
	return{
		someMethod: myMethod,
		someOtherMethod: myOtherMethod
	};
})(window);
*/

//MyModule.myMethod();
//MyModule.myOtherMethod();
//MyModule.someMethod();
//MyModule.someOtherMethod();

// Modular JS with Object Literal Pattern
// From: https://www.youtube.com/watch?v=HkFlM73G-hk&list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f

// object Literal
// var MyModule = {
// 	name: 'PJ',
// 	year: 2014,
// 	sayName: function(){
// 		console.log(this.name);
// 	},
// 	setName: function(newName){
// 		this.name = newName;
// 	}
// };
//
// myModule.setName('Raphael');
// myModule.sayName();
