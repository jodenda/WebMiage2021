/////////////////////////////////////////////////////////////////////////////
//                 définition des class (types d'objets) 				   //
/////////////////////////////////////////////////////////////////////////////
class StyleElt {
	constructor (color = "white", background = "black", fontSize = "100%", border = "1px black solid", width = "10%", height = "10%", padding = "0px", margin = "0px", borderRadius : "5px", fontSize : "100%") {
    	this.color 			= color				;
        this.background 	= background		;
        this.fontSize		= fontSize			;
        this.border			= border			;
        this.width			= width				;
        this.height			= height			;
        this.padding		= padding			;
        this.margin			= margin			;
        this.borderRadius	= borderRadius		;
        this.fontSize		= fontSize			;
    }
    appliquerA ( element ) { // change les valeurs pour les attributs de style de cet objet
    	let listeAttributs = Object.getOwnPropertyNames(this);
        if (typeof element === "object") { // s'il existe ! 
        	for (let attr of listeAttributs) {
        		element.style[attr] = this[ attr ];
        	}
        }
    }
}
// héritage : https://www.w3schools.com/js/js_class_inheritance.asp 

class StyleTab extends StyleElt {
  	constructor (color = "white", background = "black", fontSize = "100%", border = "1px black solid", width = "10%", height = "10%", borderCollapse = "collapse") {
    	super(color,background)		; // appel du constructeur de la classe parente
        //super(background)			;
        super(fontSize)				;
        super(border)				;
        super(width)				;
        super(height)				;
        super(borderRadius)			;
        super(fontSize)				;
        this.borderCollapse = borderCollapse; // nouvel attribut spécifique
    }
    appliquerATab ( element ) { // change les valeurs pour les attributs de style de cet objet
    	let listeAttributs = Object.getOwnPropertyNames(this);
        if (typeof element === "object") { // s'il existe ! 
        	for (let attr of listeAttributs) {
        		element.style[attr] = this[ attr ];
        	}
        }
    }
}

alert("test");