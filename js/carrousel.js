(function(){
    let elmGalerie = document.querySelector(".galerie");
    let elmGalerieImg = document.querySelectorAll(".galerie img");
    let elmBouton = document.querySelector('.bouton');
    let elmCarrousel = document.querySelector('.carrousel');
    let elmCarrousel__x = document.querySelector('.carrousel__x');
    let elmCarrousel__figure = document.querySelector('.carrousel__figure');
    let elmCarrousel__form = document.querySelector('.carrousel__form');
    let index = 1;
    let dernierIndex;


    /* Ajout des images/radio dans carrousel */
    for (const elmImg of elmGalerieImg){
        ajout_img_dans_carrousel(elmImg);
        ajout_radio_dans_carrousel();
    }
    let elmCarrousel__flecheGauche = document.querySelector(".fleches>div:first-child");
    let elmCarrousel__flecheDroite = document.querySelector(".fleches>div:nth-child(2)");


    /**
     * Ajout d'une img dans le carrousel
     * @param {object dom} elmImg 
     */
    function ajout_img_dans_carrousel(elmImg){
        elmImg.dataset.index = index;
        let elmCarrouselImg = document.createElement('img');
        //console.log(elmImg.getAttribute('src'));
        elmCarrouselImg.setAttribute('src', elmImg.getAttribute('src'));
        elmCarrouselImg.classList.add('carrousel__figure__img');
        elmCarrousel__figure.appendChild(elmCarrouselImg);
        elmImg.addEventListener('mousedown', function(e){
            elmCarrousel.classList.add('carrousel--ouvrir');
            activation_image_dans_carrousel(e);
        })
    }

    function ajout_radio_dans_carrousel(){
        let elmCarrousel__form__radio = document.createElement('input');
        elmCarrousel__form__radio.setAttribute('type', 'radio');
        elmCarrousel__form__radio.classList.add('carrousel__form__rad');
        elmCarrousel__form__radio.setAttribute('name','carrousel__form__rad');
        elmCarrousel__form__radio.dataset.index = index;
        index++;
        elmCarrousel__form.appendChild(elmCarrousel__form__radio);
        elmCarrousel__form__radio.addEventListener('mousedown', function(e){
            console.log(e);
            activation_image_dans_carrousel(e);
        })
    }
    
    function activation_image_dans_carrousel(e){
        if(dernierIndex){
            elmCarrousel__figure.children[dernierIndex].classList.remove('carrousel__figure__img--activer');
        }
        elmCarrousel__figure.children[e.target.dataset.index].classList.add('carrousel__figure__img--activer');
        elmCarrousel__form.children[parseInt(e.target.dataset.index)-1].checked = true;
        dernierIndex = e.target.dataset.index;
    }

    /* FERMER CARROUSEL */
    elmCarrousel__x.addEventListener('mousedown', function(){
        elmCarrousel.classList.remove('carrousel--ouvrir');
    })


    /*****************  FLÈCHES CARROUSEL *******************/
    elmCarrousel__flecheGauche.addEventListener('mousedown', function(e){
        index=dernierIndex;
        index--;
        if(index<1){
            index=3;
        }
        activation_image_dans_carrousel_avec_fleche()
    })
    elmCarrousel__flecheDroite.addEventListener('mousedown', function(){
        index=dernierIndex;
        index++;
        if(index>3){
            index=1;
        }
        activation_image_dans_carrousel_avec_fleche()
    })
        
    function activation_image_dans_carrousel_avec_fleche(){
        if(dernierIndex){
            elmCarrousel__figure.children[dernierIndex].classList.remove('carrousel__figure__img--activer');
        }
        elmCarrousel__figure.children[index].classList.add('carrousel__figure__img--activer');
        elmCarrousel__form.children[parseInt(index)-1].checked = true;
        dernierIndex = index;
    }

})()