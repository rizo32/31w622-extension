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
*/

function boite_carrousel(){
    /////////////////////////////////////// HTML
    // Le conteneur d'une boîte
    $contenu = 
      `<section class='carrousel'>
      <button class="carrousel--fermer>X<button>
      <figure class="carrousel__figure></figure>
      <form class="carrousel__form"></form>
      </section><!-- fin class="carrousel" -->`;
    
    return $contenu;
   }
   add_shortcode('mon_html', 'boite_carrousel');