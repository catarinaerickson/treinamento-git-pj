var novoPiu = document.querySelector('#textareaAutogrow');
var buttonPiu = document.querySelector('#piupiu');
var counter = document.querySelector('#counter');
var cheio = document.querySelector('#cheio');
var vazio = document.querySelector('#vazio');


//configura contador de caracteres
novoPiu.addEventListener('input', function(){
    var caracteres = this.value.length;
    counter.textContent = caracteres + '/140';

    if (caracteres > 140) {
        buttonPiu.disabled = true;
        buttonPiu.classList.add('disabled');
        novoPiu.classList.add('disabled');
        counter.style.color = 'red';
        vazio.classList.add('none');
        cheio.classList.remove('none');
    } else if(caracteres > 0 && caracteres <= 140){
        buttonPiu.disabled = false;
        vazio.classList.add('none');
        cheio.classList.add('none');
        buttonPiu.classList.remove('disabled');
        novoPiu.classList.remove('disabled');
        counter.style.color = 'lightgray';
    } else if (caracteres == 0){       
        counter.textContent = '';
        buttonPiu.classList.add('disabled');
        buttonPiu.disabled = false;       
        novoPiu.classList.remove('disabled'); 
    };    
    
});




//ajusta altura da caixa de texto depois que o piu é enviado
/*buttonPiu.addEventListener('click', function(){
    novoPiu.rows = 0;
});*/

//posta piu na timeline
buttonPiu.addEventListener('click', function(event){
    event.preventDefault();
    var form = document.querySelector('#textareaAutogrow');
    var piuContent = form.value.replace(/\n/g, '<br>');


    if (!piuContent == ''){
        //insere foto de perfil do usuário
        var piu = document.createElement('div');
        piu.classList.add('piu');
    
        var divPic = document.createElement('div');
        divPic.classList.add('pic');
        var pic = document.createElement('img');
        pic.setAttribute('src', './images/photo.svg');            
        divPic.appendChild(pic);
    
        piu.appendChild(divPic);
        
        //insere informações do piu
        var divInfo = document.createElement('div');
        divInfo.classList.add('info');
        
        var divUser = document.createElement('div');
        divUser.classList.add('user-info');
        var nome = document.createElement('strong');
        nome.textContent = 'Beija-Flor';
        var user = document.createElement('p');
        user.textContent = '@glaucius_dohrnii';
    
        var divText = document.createElement('div');
        divText.innerHTML = piuContent;     
        divText.classList.add('text');
    
        divUser.appendChild(nome);
        divUser.appendChild(user);
        divInfo.appendChild(divUser);
        divInfo.appendChild(divText);
    
        //cria barra de interações
        var divReact = document.createElement('div');
        divReact.classList.add('react');
        
        divReact.appendChild(criaIcon('./images/message-circle.svg'));
        divReact.appendChild(criaIcon('./images/repiu.svg'));
        divReact.appendChild(criaIcon('./images/heart.svg'));
        divReact.appendChild(criaIcon('./images/upload.svg'));
        
        divInfo.appendChild(divReact);
        piu.appendChild(divInfo)

        //cria opção de deletar
        var trash = document.createElement('img');
        trash.setAttribute('src', './images/trash.svg');
        trash.setAttribute('id', 'trash');
        trash.addEventListener('mouseover',function(){
            trash.setAttribute('src', './images/redtrash.svg');
        } );
        trash.addEventListener('mouseout',function(){
            trash.setAttribute('src', './images/trash.svg');
        } );
        trash.addEventListener('click', function(event){
            event.target.parentNode.classList.add("fadeOut");
            setTimeout(function() {
                event.target.parentNode.remove();
            }, 500);
        })

        piu.appendChild(trash);


        
        lastPiu = document.querySelector('.piu')
        timeline.insertBefore(piu, lastPiu);
    
        form.reset();
    } else {
        vazio.classList.remove('none');
        setTimeout(function(){
            vazio.classList.add('fadeOutInpiu')
        }, 2000);        
        setTimeout(function(){
            vazio.classList.add('none');
            vazio.classList.remove('fadeOutInpiu');
        }, 3000);
    }

    counter.textContent = '';
} );


