________________________________________________________________________________________________________________________
# WebMiage2021 (année Covid20/Covid21)
________________________________________________________________________________________________________________________
# contributeurs : (ordre alpha du nom)
- Joël Dendaletche (enseignant) ;
- ...





________________________________________________________________________________________________________________________
# vu :
projet de site d'application du cours/td d'interface web 1.0

séance 1 2021/01/12) 
          Les éléments minimaux d'une page Web :
          
          - obligatoires : <!DOCTYPE html><html><head><title>titre dans l'onglet</title></head><body></body></html>
          - vivement recommandés : 
                 en entête : <!-- un résumé de ce que produit la page et infos sur le développement -->
                 dans <head> : 
                    - <meta charset="utf-8" /> <!-- encodage unicode --> ;
                    - <link rel="shortcut icon" href="url image/nomImage.png" /> <!-- personnalisation d'une icone dans 
                    l'onglet--> ;
                    - <link rel="stylesheet" href="./css/maPageDeStyle.css" /> <!-- autant de pages que nécéssaire --> ; 
                    - <!-- de nombreux commentaires -->
                    
          Notions lexicales :
                    - éléments, attributs, méthodes, évènements, DOM (document object model)
                    
          Aperçu des possibilités de JS :
                    - identifier un élément :
                              - par son id : document.getElementById("id de l'élément") ;
                              - par sa position (index) dans la liste des éléments de ce types dans le DOM du document : 
                                             document.getElementsByTagName("nom du type d'élément") [index]
                                             
                    - modifier ou définir l'attribut d'un élément :
                              element.attribut = valeurs ;
                              

________________________________________________________________________________________________________________________

séance 2 2021/01/19)  : rappels et cours sur les  notions utiles en CSS

          Bases : combinaison de sélecteurs (nom de balises, classes .maClasse, identifiant #) et de connecteurs   ' ' + >
          
          Notions avancées : - pseudo-classes
                              gestion fine des éléments fils de avec : :nth-child( f(n) )
          
          
                              - pseudo-éléments (5 seulement)
                              application de ::before et ::after pour créer une numérotation automatique d'un plan





          Propositions de projets individuels (ou min sous-groupe de 2 à 3 avec tâche et cahier des charges bien défini :
          
                    - Intro/tuto avec ________________________________________________________________________________________________________________________exemples et codes : (sans CDN)
                              - mise au propre, amendements de ce cours/TD/TP avec exercices et corrigés ;
                              - tutoriel pour comprendre, créer et utiliser des expressions régulières (Regex) ; 
                              - utilisation de bootstrap ;
                              - utilisation de angular js ;
                              - utilisation de three.js ;
                              - utilisation de mathML pour rédiger des formules mathématiques et ou comparaison avec LaTeX ;
                              - utilisation de jQuery ;
                              - développement d'un calculatrice configurable :
                                     - calculs infixé, postfixé ;
                                     - conversions d'unités ;
                                     - mode commerce / scientifique / finance (conversion devises)
                                     - ajout/suppression de touches ;
                                     - graphiques (via canvas) ;
                          
                    - développement d'un jeu ou appli originale :
                              - memory avec motifs SVG, trombinoscope (découverte d'un groupe de travail), etc ... ;
                              - jeu de hasard : outils pour jeu de rôle : dès à différentes faces, gestion de carte, ... ;
                              - éditeur de map cliquable (territoire, lexique visuel de langue, ...) ;
                              - cliqueur, 2048 et variantes ;
                              - idée perso ;
________________________________________________________________________________________________________________________
# à voir ou à faire : notions avancées en javascript : résumé => https://www.w3schools.com/jsref/default.asp
séance 3 2021/01/26)           

Les variables, les types et leur déclarations
          règles de nommage et bonnes pratiques
          portées : "Strict Mode" https://www.w3schools.com/js/js_scope.asp
          les types,  ; concaténtion ; eval ( expression ) = dangereux
          transtypage automatique ou voulus (parseInt(..), parseFloat(..), .toString() https://www.w3schools.com/js/js_type_conversion.asp
          les trois sortes de déclaration var, let, const
          initialisation (éviter new ...)
          
les fonctions :
          déclaration simple
          arguments : sans, nombre variable, avec valeur initiale
          auto appelante
          fonction fléchée => https://www.w3schools.com/js/js_arrow_function.asp (entrées) => { traitement des entrées et ou sortie }
          en tant que variable
          
les classes et objets : https://www.w3schools.com/js/js_classes.asp
          définition des attributs                : this.attribut = f( param...) ;
          définition des méthodes (fonctions) :    this.maMethode = function ( param...) { bloc } ;
          initialisation avec : monInstanceDObjet = new Objet( listeParamètresFourniAuConstructeur) ;
          héritage
          
mots réservés : "statements" => https://www.w3schools.com/jsref/jsref_statements.asp
          les boucles : 
                    - for (compteur = valInit ; test(compteur) ; compteur modification) { bloc } ;
                    - while ( test(logique) => continuer ){ bloc } ;
          
          les opérations logiques :
                    - if ( test(logique) { bloc si vrai } else { bloc si faux } ; if else if ...
                    - switch case => https://www.w3schools.com/js/js_switch.asp
                    - opérateurs ! (=not) && || 
                    
          gestions des erreurs : try catch (nouveau) https://www.w3schools.com/jsref/jsref_try_catch.asp
          
          
          
