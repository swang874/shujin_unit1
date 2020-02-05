//initialize function called when the script loads
function initialize(){
	cities();
};

//function to create a table with cities and their populations
function cities(){
	//define two arrays for cities and population
	var cityPop = [
		{
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	//append the table element to the div
	$("#mydiv").append("<table>");

	//append a header row to the table
	$("table").append("<tr>");

	//add the "City" and "Population" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");

	//loop to add a new row for each city
  for (var i = 0; i < cityPop.length; i++){
    //assign longer html strings to a variable
    var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
    //add the row's html string to the table
		$("table").append(rowHtml);
  };

  //call functions to add columns and events
  addColumns(cityPop);
  addEvents();
};

//function to add a column of city size for each city
function addColumns(cityPop){
    //iterate over each row element
    $('tr').each(function(i){
			//add the "City Size" column to the header row
    	if (i == 0){
    		$(this).append('<th>City Size</th>');
    	} else {

        //define the city size for each city
    		var citySize;
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';
    		} else {
    			citySize = 'Large';
    		};

        //add the city size column to each city
    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};

//function to add a mouseover event and a click event
function addEvents(){
  //mouseover event listener with anonymous handler function
	$('table').mouseover(function(){
    //define an RGB color
		var color = "rgb(";

		//loop to add the three RGB parameters
		for (var i=0; i<3; i++){
      //get random RGB parameters between 0 and 255
			var random = Math.round(Math.random() * 255);
      //complete the RBG color
			color += random;
			if (i<2){
				color += ",";
			} else {
				color += ")";
			};
		};

    //change the text color
		$(this).css('color', color);
	});

  //named handler function for removable click event listener
	function clickme(){
		alert('Hey, you clicked me!');
	};

	//add the click event listener
	$('table').on('click', clickme);
};

//call the initialize function when the document has loaded
$(document).ready(initialize);
