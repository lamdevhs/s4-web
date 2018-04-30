//-----------------  SCRIPT PRINCIPAL -------------------------
window.addEventListener('load', function(){
	init();
})

//-----------------  FONCTIONS -------------------------

function init(evt) {

//test pour v�rifier que l'API de g�olocalisation est impl�ment� dans le navigateur
if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(actionSiSucces, actionSiPb);
	//getCurrentPosition methode qui permet un ciblage ponctuel. 2 fonctions callback en arguments
else
  console.log("Votre navigateur ne prend pas en compte la g�olocalisation");
}
   

function actionSiSucces(position){
	//objet JS position
  console.log("Latitude : " + position.coords.latitude + ", longitude : " + position.coords.longitude); 
}


function actionSiPb(error){
  switch(error.code){
    case error.PERMISSION_DENIED:
      console.log(error.message+" : l'utilisateur n'a pas autoris� l'acc�s � sa position");
      break;     
    case error.POSITION_UNAVAILABLE:
      console.log(error.message+" : l'emplacement de l'utilisateur n'a pas pu �tre d�termin�");
      break;
    case error.TIMEOUT:
      console.log(error.message+" : le service n'a pas r�pondu � temps");
    }
}
