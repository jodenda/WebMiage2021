/*234567890ABCDEFGHIJ0123456789ABCDEFGHIJ0123456789ABCDEFGHIJ0123456789ABCDEFGHIJ
affichage du code sur 80 colonnes

        Fichiers contenant toutes les fonctions de test et debuggage (maison)

_______________________________________________________________________________*/

var debug;

(function () { 
	  // si le footer n'existe pas on le crée
      if( !document.getElementsByTagName("footer")[0] ) {
      	// attention foot n'existe que dans ce bloc !
      	let foot = document.createElement("footer"); 
        // écriture alternative de
        // foot.style.border = "1px red solid";
        foot.style["border"] = "1px red solid";
        document.body.appendChild(foot);
      }
      // si id=debug n'existe pas on le crée ! (! = not)
      if( !document.getElementById("debug") ) {
        let zoneD = document.createElement("fieldset"); 
        zoneD.style["border"] = "10px groove orange";
        zoneD.id = "debug";
        document.getElementsByTagName("footer")[0].appendChild(zoneD);
        
        let legende = document.createElement("legend"); 
        legende["innerHTML"] = "affichage de la zone de debugage";
        legende["style"]["background"] = "rgba(255,230,200,0.5)";
        zoneD.appendChild(legende);
        
        let parag = document.createElement("p"); 
        parag["innerHTML"] = "remplacer ce texte par exemple avec debug.innerHTML = 'ma variable à scruter = ' + maVariable;";
        parag["style"]["background"] = "rgba(255,230,200,0.5)";
        zoneD.appendChild(parag);
        debug = parag;
      } 
})();  
