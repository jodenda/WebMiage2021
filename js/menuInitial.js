/***********************************************************************************
*                                                                                  *
*             Mise en place du menu initial ou celui des étudiants                 *
*                                                                                  *
***********************************************************************************/

var etudiants = ['Margaux BIBERFELD','Alexandre BIET', 'Florian VERNIERES',
                 'Jordan LECLERCQ','Mathieu ZENONE','Loïc BEAUCHAINTS',
                 'Florence HERROU','Béranger ICART','Adrien GARROUSTE',
                 'Kevin DUFOUR'];

var hrefCSSEtudiants = ['/css/MBiberfeld.css','/css/alexandreBiet.css',
                        '/css/florianVernieres.css','/css/jordanlcq.css',
                        '/css/mathieuZenone.css','/css/lbchts.css',
                        '/css/florenceHerrou.css','/css/berangerPonsIcart.css',
                        '/css/adrienGarrouste.css','/css/kevinDufour.css'];

// fonction auto-invoquée qui s'active seule, une fois au chargement de la page
// Elle construit la liste déroulante pour le choix de la feuille de style de 
// la page web.
(function () {
  let contenu = "", compt, N = etudiants.length;
  
  for (compt = 0 ; compt < n ; compt++ ) {
  contenu += "<option>"+etudiants[compt]+"</option>";
  }
  alert(contenu);
  document.getElementById("selectMenu").innerHTML = contenu;
}) ();

function changeStyle() {
  let n = document.getElementById("selectMenu").selectedIndex;
 
  document.getElementById("selectMenu").href = hrefCSSEtudiants [n];
  // rafraichir la page pour changer de feuille de style
}

document.getElementById("selectMenu").addEventListener("click", changeStyle);
                 
