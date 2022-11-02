(function(){
    let log = console.log;
    console.log("carrousel");
    // Faudrait idéalement que ".galarie" soit une variable pour que ça s'applique à n'importe quel type d'élément
    let elmGalerie = document.querySelector('.galerie');
    let elmGalerieImg = document.querySelectorAll('.galerie img');
    let elmBouton = document.querySelector('.bouton'); // juste pour tester, sera enlevé
    let elmCarrousel = document.querySelector('.carrousel');
    let elmCarrousel__x = document.querySelector('.carrousel__x');
    let elmCarrousel__figure = document.querySelector('.carrousel__figure');
    let index = 0;

    elmBouton.addEventListener('mousedown', function(){
        console.log("ouverture du carrousel!");
        elmCarrousel.classList.add('carrousel--ouvrir');
        for(const elmImg of elmGalerieImg){
            ajout_img_dans_carrousel(elmImg);
            ajout_radio_dans_carrousel();           
        }
    })

    function ajout_radio_dans_carrousel(){
        let elmCarrouselFormRadio = document.createElement(input);
        elmCarrouselFormRadio.setAttribute('type', 'radio');
        elmCarrouselFormRadio.classList.add('carrousel__form__rad', 'radio');
    }

    function ajout_img_dans_carrousel(elmImg) {
        let elmCarrouselImg = document.createElement('img');
        elmCarrouselImg.setAttribute('src', elmImg.getAttribute('src'));
        elmCarrousel.classList.add('carrousel__figure__img');
        elmCarrousel__figure.appendChild(elmCarrouselImg);
    }

    elmCarrousel__x.addEventListener('mousedown', function(){
        elmCarrousel.classList.remove('carrousel--ouvrir');
    })

})();

