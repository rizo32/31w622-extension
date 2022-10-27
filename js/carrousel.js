(function(){
    console.log("carrousel");
    let elmBouton = document.querySelector('.bouton');
    let elmCarrousel = document.querySelector('.carrousel');
    let elmCarrousel__x = document.querySelector('.carrousel__x');
    elmBouton.addEventListener('mousedown', function(){
        console.log("ouverture du carrousel!");
        elmCarrousel.classList.add("carrousel--ouvrir");
    })

    elmCarrousel__x.addEventListener('mousedown', function(){
        elmCarrousel.classList.remove("carrousel--ouvrir");
    })

})();

