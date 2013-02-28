myLat = 42.39674; //for now davis square 
myLng = -71.121815;
request = new XMLHttpRequest(); //for later
curLocation = new google.maps.LatLng(myLat, myLng);
	mapOptions = {
		zoom:13,
		center:curLocation,
		mapTypeId: google.maps.MapTypeId.ROADMAP
		};
var infowindow = new google.maps.InfoWindow(); 		
function init() {
	map = new google.maps.Map(document.getElementById("map"), mapOptions); 
	findMyPosition(); //later on when connected to internet 
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
	map.panTo(curLocation);
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
	str = request.responseText; 
	console.log(str);
	stops = JSON.parse(str);

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
	alew = new google.maps.Marker ({
		position: alewife,
		title: "Alewife Station",
		icon: image 
		}); 
	alew.setMap(map);  
	//porter
	porter = new google.maps.LatLng(42.39674,-71.121815); 
	port = new google.maps.Marker ( {
		position: porter,
		title: "Porter Station", 
		icon: image
		});
	port.setMap(map);
	//harvard
	harvard = new google.maps.LatLng(42.373362, -71.118956);
	harv = new google.maps.Marker ({
		position: harvard,
		title: "Harvard Station", 
		icon: image
		});
	harv.setMap(map);
	//central
	central = new google.maps.LatLng(42.365486, -71.10382); 
	cent = new google.maps.Marker ({
		position: central,
		title: "Central Station", 
		icon: image
		});
	cent.setMap(map);
	//kendall
	kendall = new google.maps.LatLng(42.365486, -71.10382);
	kend = new google.maps.Marker ({
		position: kendall,
		title: "Kendall Station", 
		icon: image
		});
	kend.setMap(map); 
	//charlesmgh
	mgh = new google.maps.LatLng(42.361166, -71.070628);
	mgh = new google.maps.Marker ({
		position: mgh,
		title: "Charles/MGH Station", 
		icon: image
		});
	mgh.setMap(map);
	//Park
	park = new google.maps.LatLng(42.35639457, -71.0624242);
	park = new google.maps.Marker ({
		position: park,
		title: "Park St. Station", 
		icon: image
		});
	park.setMap(map); 
	//downtown
	downtown = new google.maps.LatLng(42.355518, -71.060225);
	dwtn = new google.maps.Marker ({
		position: downtown,
		title: "Downtown Crossing Station",
		icon: image
		});
	dwtn.setMap(map);
	//South
	south = new google.maps.LatLng(42.352271, -71.055242);
	south = new google.maps.Marker ({
		position: south,
		title: "South Station", 
		icon: image
		});
	south.setMap(map);
	//Broadway
	broadway = new google.maps.LatLng(42.342622,-71.056967);
	brd = new google.maps.Marker ( {
		position: broadway,
		title: "Broadway Station", 
		icon: image
		});
	brd.setMap(map);
	//Andrew
	andrew = new google.maps.LatLng(42.330154,-71.057655);
	andr = new google.maps.Marker ({
		position: andrew,
		title: "Andrew Station", 
		icon: image
		});
	andr.setMap(map);
	//JFK
	jfk = new google.maps.LatLng(42.320685, -71.052391);
	jfk = new google.maps.Marker ({
		position: jfk,
		title: "JFK Station", 
		icon: image
		});
	jfk.setMap(map);
	//Savin Hill
	savin = new google.maps.LatLng(42.31129, -71.053331);
	savin = new google.maps.Marker ({
		position: savin,
		title: "Savin Hill Station", 
		icon: image
		});
	savin.setMap(map);
	//Fields Corner
	fields = new google.maps.LatLng(42.300093, -71.061667);
	felc = new google.maps.Marker ({
		position: fields,
		title: "Fields Corner Station",
		icon: image
		});
	felc.setMap(map);
	//Shawmut
	shawmut = new google.maps.LatLng(42.2931258, -71.065738);
	shaw = new google.maps.Marker ({
		position: shawmut,
		title: "Shawmut Station", 
		icon: image
		});
	shaw.setMap(map);
	//Ashmont
	ashmont = new google.maps.LatLng(42.284652, -71.064489); 
	ashm = new google.maps.Marker ({
		position: ashmont,
		title: "Ashmont Station", 
		icon: image
		});
	ashm.setMap(map);
	//North Quincy 
	nquincy = new google.maps.LatLng(42.275275, -71.029583);
	nquin = new google.maps.Marker ({
		position: nquincy,
		title: "North Quincy Station", 
		icon: image
		});
	nquin.setMap(map);
	//Wollaston
	wollaston = new google.maps.LatLng(42.2665139, -71.02033); 
	woll = new google.maps.Marker ({
		position: wollaston,
		title: "Wollaston Station", 
		icon: image
		});
	woll.setMap(map);
	//Quincy Center
	quincenter = new google.maps.LatLng(42.251809, -71.005409);
	qcen = new google.maps.Marker ({
		position: quincenter,
		title: "Quincy Center Station",
		icon: image
		});
	qcen.setMap(map);
	//Quincy adams
	quinadams = new google.maps.LatLng(42.233391, -71.007153);
	qadam = new google.maps.Marker ({
		position: quinadams,
		title: "Quincy Adams Station", 
		icon: image
		});
	qadam.setMap(map);
	//Braintree
	braintree = new google.maps.LatLng(42.2078543, -71.001139); 
	btree = new google.maps.Marker ({
		position: braintree,
		title: "Braintree Station",
		icon: image 
		});
	btree.setMap(map);
	

} 

