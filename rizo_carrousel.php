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
Author URI: https://github.com/rizo32
Version: 1.0.0


filemtime() // retourne en milliseconde le temps de la dernière sauvegarde
plugin_dir_path() // retourne le chemin du répertoire du plugin
__FILE__ // le fichier en train de s'exécuter
wp_enqueue_style() // Intègre le link:css dans la page
wp_enqueue_script() // intègre le script dans la page
wp_enqueue_scripts // le hook

*/

function rizo_enqueue() {
    $version_css = filemtime(plugin_dir_path(__FILE__) . "style.css");
    $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");

    wp_enqueue_style("rizo_carrousel_css",
                      plugin_dir_url(__FILE__) . "style.css",
                      array(),
                      $version_css,
                      false);
    

    wp_enqueue_script("rizo_carrousel_js",
                      plugin_dir_url(__FILE__) . "js/carrousel.js",
                      array(),
                      $version_js,
                      true);
}

add_action("wp_enqueue_scripts", "rizo_enqueue");




function rizo_boite_carrousel(){
    /////////////////////////////////////// HTML
    // Le conteneur d'une boîte
    $contenu =


    "
    <button class='bouton'>Ouvrir le carrousel</button>
    
    <div class='carrousel'>"
    . '<button class="carrousel__x">X</button>'
    . '<figure class="carrousel__figure"></figure>'
    . '<form class="carrousel__form"></form>'
    . '</div> <!-- fin class="carrousel" -->';

return $contenu;
}
   add_shortcode('rizo_carrousel', 'rizo_boite_carrousel');



