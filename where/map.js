myLat = 42.39500; //for now near davis square 
myLng = -71.121815;

request = new XMLHttpRequest(); 
var redStations = []; 
var redAshmont = [];
var redBraintree = [];

var markers = []; 
var stops; 
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
	parse_stops();
}

function renderMap() 
{
	curLocation = new google.maps.LatLng(myLat, myLng);
	parse_stops();
	map.panTo(center);
	renderRedLine();
}

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
		
	//alewife
	alewife = new google.maps.LatLng(42.395428, -71.142483); 
	redStations.push(alewife); 
	alew = new google.maps.Marker ({position: alewife, title: "Alewife Station", icon: image }); 
	alew.setMap(map);  
	markers.push(alew); 
	//porter
	porter = new google.maps.LatLng(42.39674,-71.121815); 
	redStations.push(porter); 
	port = new google.maps.Marker ( {
		position: porter,
		title: "Porter Station", 
		icon: image
		});
	port.setMap(map);
	markers.push(port); 
	//harvard
	harvard = new google.maps.LatLng(42.373362, -71.118956);
	redStations.push(harvard); 
	harv = new google.maps.Marker ({
		position: harvard,
		title: "Harvard Station", 
		icon: image
		});
	harv.setMap(map);
	markers.push(port); 
	//central
	central = new google.maps.LatLng(42.365486, -71.10382); 
	redStations.push(central); 
	cent = new google.maps.Marker ({
		position: central,
		title: "Central Station", 
		icon: image
		});
	cent.setMap(map);
	markers.push(cent); 
	//kendall
	kendall = new google.maps.LatLng(42.365486, -71.10382);
	redStations.push(kendall);
	kend = new google.maps.Marker ({
		position: kendall,
		title: "Kendall Station", 
		icon: image
		});
	kend.setMap(map); 
	markers.push(kend); 
	//charlesmgh
	mgh = new google.maps.LatLng(42.361166, -71.070628);
	redStations.push(mgh); 
	mgh = new google.maps.Marker ({
		position: mgh,
		title: "Charles/MGH Station", 
		icon: image
		});
	mgh.setMap(map);
	markers.push(mgh); 
	//Park
	park = new google.maps.LatLng(42.35639457, -71.0624242);
	redStations.push(park);
	park = new google.maps.Marker ({
		position: park,
		title: "Park St. Station", 
		icon: image
		});
	park.setMap(map); 
	markers.push(park); 
	//downtown
	downtown = new google.maps.LatLng(42.355518, -71.060225);
	redStations.push(downtown);
	dwtn = new google.maps.Marker ({
		position: downtown,
		title: "Downtown Crossing Station",
		icon: image
		});
	dwtn.setMap(map);
	markers.push(dwtn); 
	//South
	south = new google.maps.LatLng(42.352271, -71.055242);
	redStations.push(south); 
	south = new google.maps.Marker ({
		position: south,
		title: "South Station", 
		icon: image
		});
	south.setMap(map);
	markers.push(south); 
	//Broadway
	broadway = new google.maps.LatLng(42.342622,-71.056967);
	redStations.push(broadway); 
	brd = new google.maps.Marker ( {
		position: broadway,
		title: "Broadway Station", 
		icon: image
		});
	brd.setMap(map);
	markers.push(brd); 
	//Andrew
	andrew = new google.maps.LatLng(42.330154,-71.057655);
	redStations.push(andrew); 
	andr = new google.maps.Marker ({
		position: andrew,
		title: "Andrew Station", 
		icon: image
		});
	andr.setMap(map);
	markers.push(andr); 
	//JFK
	jfk = new google.maps.LatLng(42.320685, -71.052391);
	redStations.push(jfk); 
	redAshmont.push(jfk);
	redBraintree.push(jfk); 
	jfk = new google.maps.Marker ({
		position: jfk,
		title: "JFK Station", 
		icon: image
		});
	jfk.setMap(map);
	markers.push(jfk); 
	//Savin Hill
	savin = new google.maps.LatLng(42.31129, -71.053331);
	redAshmont.push(savin); 
	savin = new google.maps.Marker ({
		position: savin,
		title: "Savin Hill Station", 
		icon: image
		});
	savin.setMap(map);
	markers.push(savin); 
	//Fields Corner
	fields = new google.maps.LatLng(42.300093, -71.061667);
	redAshmont.push(fields); 
	felc = new google.maps.Marker ({
		position: fields,
		title: "Fields Corner Station",
		icon: image
		});
	felc.setMap(map);
	markers.push(felc); 
	//Shawmut
	shawmut = new google.maps.LatLng(42.2931258, -71.065738);
	redAshmont.push(shawmut); 
	shaw = new google.maps.Marker ({
		position: shawmut,
		title: "Shawmut Station", 
		icon: image
		});
	shaw.setMap(map);
	markers.push(shaw); 
	//Ashmont
	ashmont = new google.maps.LatLng(42.284652, -71.064489); 
	redAshmont.push(ashmont); 
	ashm = new google.maps.Marker ({
		position: ashmont,
		title: "Ashmont Station", 
		icon: image
		});
	ashm.setMap(map);
	markers.push(ashm); 
	//North Quincy 
	nquincy = new google.maps.LatLng(42.275275, -71.029583);
	redBraintree.push(nquincy); 
	nquin = new google.maps.Marker ({
		position: nquincy,
		title: "North Quincy Station", 
		icon: image
		});
	nquin.setMap(map);
	markers.push(nquin); 
	//Wollaston
	wollaston = new google.maps.LatLng(42.2665139, -71.02033); 
	redBraintree.push(wollaston); 
	woll = new google.maps.Marker ({
		position: wollaston,
		title: "Wollaston Station", 
		icon: image
		});
	woll.setMap(map);
	markers.push(woll); 
	//Quincy Center
	quincenter = new google.maps.LatLng(42.251809, -71.005409);
	redBraintree.push(quincenter); 
	qcen = new google.maps.Marker ({
		position: quincenter,
		title: "Quincy Center Station",
		icon: image
		});
	qcen.setMap(map);
	markers.push(qcen); 
	//Quincy adams
	quinadams = new google.maps.LatLng(42.233391, -71.007153);
	redBraintree.push(quinadams); 
	qadam = new google.maps.Marker ({
		position: quinadams,
		title: "Quincy Adams Station", 
		icon: image
		});
	qadam.setMap(map);
	markers.push(qadam); 
	//Braintree
	braintree = new google.maps.LatLng(42.2078543, -71.001139); 
	redBraintree.push(braintree); 
	btree = new google.maps.Marker ({
		position: braintree,
		title: "Braintree Station",
		icon: image 
		});
	btree.setMap(map);
	markers.push(btree); 
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
	
	
} 

