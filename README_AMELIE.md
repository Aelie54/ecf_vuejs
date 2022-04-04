
*-----------------------------------------------------------------------------------------
AIDE A LA COMPREHENSION et SENS de lecture des fichiers :
------------------------------------------------------------------------------------------
1* 
aller dans      
router > index.ts : 
création de la route, je suis restée sur la page d'accueil et j'ai renvoyé vers le fichier dans le dossier views nommé "PiView.vue"
------------------------------------------------------------------------------------------
2* 
dans le fichier PiView.vu :
il y a la description de l'appli web avec l'importation du formulaire (pour renseigner le rayon avec bouton submit) et du tableau où s'afficheront le périmère, la surface et le volume.

formulaire avec input => src>components>FormPivue
tableau avec calculs => src>components>TablePivue
------------------------------------------------------------------------------------------
3* 
dans le formulaire (FormPi.vue), il y a dans le template un input où le client doit renseigner le rayon et un bouton pour envoie.

Lors du submit, un écouteur (ligne5) permet de lancer la fonction calcul qui est présente dans le script.

dans script il y a l'importation du store dans le quel figure un objet sphere avec rayon/perimetre/surface et volume définis dedans.
j'ai pris soin de créer un objet, qui est dans une constante nommée "sphere", de type réactive, que j'initialise et qui permettra ensuite de l'envoyer dans le store(lignes 59 à 62) à chaque modification du input(ou rayon, donnée d'entrée) avec clic sur le bouton "Calculer".

le store => src>sories>Sphere.ts

Lorsque la fonction calcul est lancée, il y a donc calcul des diverses données demandées et qui sont ensuite envoyées vers le store, pour pouvoir les réutiliser dans d'autres vues, comme celle de mon tableau récapitulatif.
------------------------------------------------------------------------------------------
4*
le tableau recapitulatif est dans la vue du dossier components nommée "TablePi.vue".
Puisque les données sont dans le store, je peux les insérer directement dans mon tableau(directements renseignées dans les td correspondants).
il y a encore une fois dans les balises script l'import du store avec la constante pour utilisation.
------------------------------------------------------------------------------------------
MERCI POUR VOTRE LECTURE
*-----------------------------------------------------------------------------------------
