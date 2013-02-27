myLat = 0;
myLng = 0;
request = new XMLHttpRequest();
iamHere = new google.maps.LatLng(myLat, myLng);
mapOptions = {
		zoom:11,
		center:iamHere,
		mapTypeId: google.maps.MapTypeId.ROADMAP
		};
map;
marker;
infowindow = new google.maps.InfoWindow();
places; 

function init()
{
	map = new google.maps.Map(document.getElementById("map"), mapOptions); 
	findMyPosition();
}

function findMyPosition()
{
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
		myLat = position.coords.latitude;
		myLng = position.coords.longitude;
		renderMap();
		}); 
	}
	else {
		alert("HTML5 geolocation not supported by your browser.");
	}		
}

function renderMap()
{
	me = new google.maps.LatLng(myLat, myLng);
	map.Panto(me);
	
	//edit marker
	marker = new google.maps.Marker({
		position: me,
		title:"I Am Here",
		});
	marker.setMap(map);
	
	//info markers for redLine station?
	var request = {
		location: me, 
		radius: '500',
		types: [????],
	};
	//? 
	//service = new google.maps.places.PlacesService(map);
	//service.search(request, callback);
	//within render line, call the google maps API and make the array with the JSON 
	//AJAX link. hardcode the latitudes of the info box, AJAX the info inside them. 
//	renderRedLine();
}

function renderRedLine() 
{
	Alewife = new google.maps.LatLng()
	
	Alewife = new marker
}