var myLat = 0;
var myLng = 0;
var request = new XMLHttpRequest();
var iamHere = new google.maps.LatLng(myLat, myLng);
var mapOptions = {
		zoom = 7;
		center = me;
		mapTypeId: google.maps.MapTypeId.ROADMAP;
		};
var map;
var marker;
var infowindow = new google.maps.InfoWindow();
var places; 

function init()
{
	map = new google.maps.Map(document.getElementById("map"), mapOptions); 
	
}

