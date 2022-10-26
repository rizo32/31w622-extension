<?php
/**
 * 

 * Plugin Name
 *
 * @package           Carrousel
 * @author            Rizo
 * @copyright         Collège de Maisonneuve
 * @license           GPL-2.0-or-later
*/
/*
Plugin Name: rizo_carrousel
Description: Afficher une boite modale de l'image sélectionnée d'une galerie pour ensuite accéder à toutes les images de la galerie.
Author: Gabriel R. Rizzoli
Author URI: https://github.com/ridz32
Version: 1.0.0
*/

function genere_html(){
    /////////////////////////////////////// HTML
    // Le conteneur d'une boîte
    $contenu = 
      "<div class='boite'>"
    . "<code>......Auteur: " . get_the_author() . "</code>"
    . "<date>......Date de publication: " . get_the_date() . "</date>"
    . "<h5>......Adresse URL" . get_the_guid() . "</h5>"
    . "<h6>......Catégorie: " . get_the_category() . "</h6>"
    . '</div> <!-- fin class="boite" -->';
    
    return $contenu;
   }
   add_shortcode('mon_html', 'genere_html');