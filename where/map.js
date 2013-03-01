myLat = 42.39500; //for now near davis square 
myLng = -71.121815;

request = new XMLHttpRequest(); 
request2 = new XMLHttpRequest(); 
var redStations = []; 
var redAshmont = [];
var redBraintree = [];
var markers = []; 
var stops; 
var infowindow = new google.maps.InfoWindow(); 

var CarmenLat = 42.33058;
var CarmenLng = -71.06633;
var WaldoLat = 42.39650;
var WaldoLng = -71.121824; 
/*
function getMyLocation()
{
	if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
			myLat = position.coords.latitude;
			myLng = position.coords.longitude;
	
	else {
		alert("Sorry, HTML5 geolocation is not supported on your browser.");
	}
	}
*/ 
center = new google.maps.LatLng(42.330678, -71.06678);
	mapOptions = {
		zoom:12,
		center:center,
		mapTypeId: google.maps.MapTypeId.ROADMAP
		};


function init() {
	map = new google.maps.Map(document.getElementById("map"), mapOptions); 
//	function getMyLocation();
	
	var meMarker = new google.maps.Marker({
	position: center,
	map: map,
	title: "You are here!" 
	}); 
	meMarker.setMap(map); 
	
	var infowindow = new google.maps.InfoWindow(); 	
    google.maps.event.addListener(meMarker, 'click', function() {
    infowindow.setContent(meMarker.title), 
	infowindow.open(map,meMarker)
	}); 
	renderMap(); 
}

function findMyPosition() 
{
	//geolocation, do check if supported on browser 
	renderMap();
	test = parse_stops();
	console.log(test); 
}

function renderMap() 
{
	curLocation = new google.maps.LatLng(myLat, myLng);
//	parse_stops();
	map.panTo(center);
	renderRedLine();
	findCarmenAndWaldo();
}
/*
function parse_stops()
{
	request.open("GET", "http://mbtamap-cedar.herokuapp.com/mapper/redline.json", true);
	request.send(null);
	request.onreadystatechange = callback; 
}

function callback()
{
	if(request.readyState == 4 && request.status == 200) {
		str = request.responseText; 
		stops = JSON.parse(str);
	}
}*/ 
function findCarmenAndWaldo()
{
	var waldo = {
		url: 'waldo.png',
		size: new google.maps.Size(71, 71),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(17, 34),
		scaledSize: new google.maps.Size(25,25)
		};
		
	var carmen = {
		url: 'carmen-sandiego.png',
		size: new google.maps.Size(71, 71),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(17, 34),
		scaledSize: new google.maps.Size(25,25)
		};
		
/*	request2.open("GET", "http://messagehub.herokuapp.com/a3.json", true);
	request2.send(null);
	request2.onreadystatechange = callback2;*/ 
	
	Waldo = new google.maps.LatLng(WaldoLat, WaldoLng);
	WaldoMarker = new google.maps.Marker ({
		position: Waldo, title: "Here's Waldo!", icon: waldo }); 
	WaldoMarker.setMap(map);
	console.log(WaldoMarker); 
	wInfo = new google.maps.InfoWindow(); 
	google.maps.event.addListener(WaldoMarker, 'click', function() {
		wInfo.setContent(WaldoMarker.title), 
		wInfo.open(map, WaldoMarker)
		}); 
	Carmen = new google.maps.LatLng(CarmenLat, CarmenLng); 
	CarmenMarker = new google.maps.Marker ({
		position: Carmen, title: "Here's Carmen!", icon: carmen}); 
	CarmenMarker.setMap(map); 
	cInfo = new google.maps.InfoWindow();
	google.maps.event.addListener(CarmenMarker, 'click', function() {
		cInfo.setContent(CarmenMarker.title), 
		console.log(cInfo),
		console.log(CarmenMarker.title),
		cInfo.open(map, CarmenMarker)
		});
}		
	


function callback2()
{
	//do stuff 

}

function renderRedLine()
{
	var image = { 
		url: 'MBTA-Logo.png', 
		size: new google.maps.Size(71, 71),
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(17,34),
		scaledSize: new google.maps.Size(25, 25)
		};
		
	alewife = new google.maps.LatLng(42.395428, -71.142483); 
	redStations.push(alewife); 
	markers.push(new google.maps.Marker ({position: alewife, title: "Alewife Station", icon: image})); 

	porter = new google.maps.LatLng(42.39674,-71.121815); 
	redStations.push(porter); 
	markers.push(new google.maps.Marker({position: porter, title: "Porter Station", icon: image}));

	harvard = new google.maps.LatLng(42.373362, -71.118956);
	redStations.push(harvard); 
	markers.push(new google.maps.Marker ({position: harvard, title: "Harvard Station", icon: image}));

	central = new google.maps.LatLng(42.365486, -71.10382); 
	redStations.push(central); 
	markers.push(new google.maps.Marker ({position: central, title: "Central Station", icon: image}));
	
	kendall = new google.maps.LatLng(42.365486, -71.10382);
	redStations.push(kendall);
	markers.push(new google.maps.Marker ({position: kendall,title: "Kendall Station", icon: image}));

	mgh = new google.maps.LatLng(42.361166, -71.070628);
	redStations.push(mgh); 
	markers.push(new google.maps.Marker ({position: mgh,title: "Charles/MGH Station", icon: image}));

	park = new google.maps.LatLng(42.35639457, -71.0624242);
	redStations.push(park);
	markers.push(new google.maps.Marker ({position: park,title: "Park St. Station", icon: image}));

	downtown = new google.maps.LatLng(42.355518, -71.060225);
	redStations.push(downtown);
	markers.push(new google.maps.Marker ({position: downtown,title: "Downtown Crossing Station",icon: image
		}));

	south = new google.maps.LatLng(42.352271, -71.055242);
	redStations.push(south); 
	markers.push(new google.maps.Marker ({position: south,title: "South Station", icon: image}));

	broadway = new google.maps.LatLng(42.342622,-71.056967);
	redStations.push(broadway); 
	markers.push(new google.maps.Marker ( {position: broadway,title: "Broadway Station", icon: image}));

	andrew = new google.maps.LatLng(42.330154,-71.057655);
	redStations.push(andrew); 
	markers.push(new google.maps.Marker ({position: andrew,title: "Andrew Station", icon: image}));

	jfk = new google.maps.LatLng(42.320685, -71.052391);
	redStations.push(jfk); 
	redAshmont.push(jfk);
	redBraintree.push(jfk); 
	markers.push(new google.maps.Marker ({position: jfk,title: "JFK Station", icon: image}));
	
	savin = new google.maps.LatLng(42.31129, -71.053331);
	redAshmont.push(savin); 
	markers.push(new google.maps.Marker ({position: savin,title: "Savin Hill Station", icon: image}));

	fields = new google.maps.LatLng(42.300093, -71.061667);
	redAshmont.push(fields); 
	markers.push(new google.maps.Marker ({position: fields,title: "Fields Corner Station", icon: image}));

	shawmut = new google.maps.LatLng(42.2931258, -71.065738);
	redAshmont.push(shawmut); 
	markers.push(new google.maps.Marker ({position: shawmut,title: "Shawmut Station", icon: image}));

	ashmont = new google.maps.LatLng(42.284652, -71.064489); 
	redAshmont.push(ashmont); 
	markers.push(new google.maps.Marker ({position: ashmont,title: "Ashmont Station", icon: image}));

	nquincy = new google.maps.LatLng(42.275275, -71.029583);
	redBraintree.push(nquincy); 
	markers.push(new google.maps.Marker ({position: nquincy,title: "North Quincy Station", icon: image}));

	wollaston = new google.maps.LatLng(42.2665139, -71.02033); 
	redBraintree.push(wollaston); 
	markers.push(new google.maps.Marker ({position: wollaston,title: "Wollaston Station", icon: image}));

	quincenter = new google.maps.LatLng(42.251809, -71.005409);
	redBraintree.push(quincenter); 
	markers.push(new google.maps.Marker ({position: quincenter,title: "Quincy Center Station",icon: image}));

	quinadams = new google.maps.LatLng(42.233391, -71.007153);
	redBraintree.push(quinadams); 
	markers.push(new google.maps.Marker ({position: quinadams,title: "Quincy Adams Station",icon: image}));

	braintree = new google.maps.LatLng(42.2078543, -71.001139); 
	redBraintree.push(braintree); 
	markers.push(new google.maps.Marker ({position: braintree,title: "Braintree Station",icon: image }));
 
//polyline	
redLine = new google.maps.Polyline({
	path: redStations,
	strokeColor: "red",
	strokeOpacity: 1.0,
	strokeWeight: 10
	});
	
	redLine.setMap(map); 
redAshmontBranch = new google.maps.Polyline({
	path: redAshmont,
	strokeColor: "red",
	strokeOpacity: 1.0,
	strokeWeight: 10,
	});
	redAshmontBranch.setMap(map);
redBraintreeBranch = new google.maps.Polyline({
	path: redBraintree,
	strokeColor: "red",
	strokeOpacity: 1.0,
	strokeWeight: 10,
	});
	redBraintreeBranch.setMap(map); 

//markers 	
for (var m in markers) {
	markers[m].setMap(map);
	google.maps.event.addListener(markers[m], 'click', function() {
			nameOfStop = this.title;
			object = this;
			request.open("GET", "http://mbtamap-cedar.herokuapp.com/mapper/redline.json", true);
			request.send(null);
			request.onreadystatechange = function() {
				 	if(request.readyState == 4 && request.status == 200) {
				 	content = nameOfStop; 
					str = request.responseText; 
					stops = JSON.parse(str);
					}
			}
			infowindow.setContent(content);
			infowindow.open(map, object);
			}); 
	}
}





