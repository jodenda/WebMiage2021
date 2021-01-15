/***********************************************************************************
*                                                                                  *
*             Mise en place du menu initial ou celui des étudiants                 *
*                                                                                  *
***********************************************************************************/

var etudiants = ['defaut', 'Loïc BEAUCHAINTS','Margaux BIBERFELD','Alexandre BIET',
                 'Kevin DUFOUR','Adrien GARROUSTE','Florence HERROU',
                 'Béranger ICART','Jordan LECLERCQ','Florian VERNIERES',
                 'Mathieu ZENONE'];
                 
(function () {
  let contenu = "", compt, N = etudiants.length;
  
  for (compt = 0 ; compt < n ; compt++ ) {
  contenu += "<option>"+etudiants[compt]+"</option>";
  }
  
  document.getElementById("selectMenu").innerHTML = contenu;
}) ();
                 
