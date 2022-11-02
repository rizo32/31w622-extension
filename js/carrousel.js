(function(){
    let log = console.log;
    console.log("carrousel");
    // Faudrait idéalement que ".galarie" soit une variable pour que ça s'applique à n'importe quel type d'élément
    let elmGalerie = document.querySelector('.galerie');
    let elmGalerieImg = document.querySelectorAll('.galerie img');
    let elmBouton = document.querySelector('.bouton'); // juste pour tester, sera enlevé
    let elmCarrousel = document.querySelector('.carrousel');
    let elmCarrousel__x = document.querySelector('.carrousel__x');

    elmBouton.addEventListener('mousedown', function(){
        console.log("ouverture du carrousel!");
        elmCarrousel.classList.add('carrousel--ouvrir');
        for(const elmImg of elmGalerieImg){
            console.log(elmImg.getAttribute('src'));
            let elmImg = document.createElement('img');
            
        }
    })

    elmCarrousel__x.addEventListener('mousedown', function(){
        elmCarrousel.classList.remove('carrousel--ouvrir');
    })

})();

