
xhr.addEventListener('load', function(){
    var hearts = document.querySelectorAll('#heart');
    var repius = document.querySelectorAll('#repiu');

    hearts.forEach(function(heart){
        reagir(heart, './images/heart.svg', './images/redheart.svg');
    });
    
    repius.forEach(function(repiu) {
        reagir(repiu, './images/repiu.svg', './images/greenrepiu.svg');
    });
});


function reagir(obj, srcCinza, srcColorida) {
    var clicked = false;
    var icon = obj.children[0];
    var num = parseInt(obj.children[1].textContent);

        obj.addEventListener('click', function(){         
            
            if (clicked == false) {
                icon.setAttribute('src', srcColorida);
                num += 1;
                obj.children[1].textContent = num;
                clicked = true;                
            } else {
                icon.setAttribute('src', srcCinza);
                num -= 1;
                obj.children[1].textContent = num;
                clicked = false;
            }

            if (num == 0) {
                obj.children[1].style.visibility = 'hidden';
            } else {
                obj.children[1].style.visibility = 'visible';
            }
        });
}