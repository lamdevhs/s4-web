//-----------------  SCRIPT PRINCIPAL -------------------------
window.addEventListener('load', function(){
	afficherCarte();
})

//-----------------  FONCTIONS -------------------------

function afficherCarte() {

	var latlng = new google.maps.LatLng(48.8,2.3);

	var optionsMap = {
		  zoom: 10, 
		  center: latlng,
		  // mapTypeControl:false,
		  mapTypeId: google.maps.MapTypeId.ROADMAP
	};	
	var map = new google.maps.Map(document.getElementById("carte"), optionsMap);

/*
var optionsMarker = {
      position: latlng, 
      map: map, 
      title:"c'est ici" 
};
var marker = new google.maps.Marker(optionsMarker);
*/
} 

