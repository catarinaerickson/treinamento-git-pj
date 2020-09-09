var timeline = document.querySelector('section.timeline');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://next.json-generator.com/api/json/get/EkyZfHLU_');
xhr.responseType = 'json';

xhr.onload = () => {
    var arr = xhr.response;

    arr.forEach(function(obj){
        var piu = document.createElement('div');
        piu.classList.add('piu');

        //insere foto de perfil
        var divPic = document.createElement('div');
        divPic.classList.add('pic');
        //verifica se o usuário possui foto de perfil
        if (!obj.imagem=='') {
            var pic = document.createElement('img');
            pic.setAttribute('src', obj.imagem);            
            divPic.appendChild(pic);
        };
        piu.appendChild(divPic);

        //insere informações do piu
        var divInfo = document.createElement('div');
        divInfo.classList.add('info');
        
        var divUser = document.createElement('div');
        divUser.classList.add('user-info');
        var nome = document.createElement('strong');
        nome.textContent = obj.nome;
        var user = document.createElement('p');
        user.textContent = obj.username;

        var divText = document.createElement('div');
        divText.textContent = obj.mensagem;     
        divText.classList.add('text');

        divUser.appendChild(nome);
        divUser.appendChild(user);
        divInfo.appendChild(divUser);
        divInfo.appendChild(divText);
        
        //cria barra de interações
        var divReact = document.createElement('div');
        divReact.classList.add('react');
        
        divReact.appendChild(criaIcon('./images/message-circle.svg', 'comment'));
        divReact.appendChild(criaIcon('./images/repiu.svg', 'repiu'));
        divReact.appendChild(criaIcon('./images/heart.svg', 'heart'));
        divReact.appendChild(criaIcon('./images/upload.svg', 'upload'));
        
        divInfo.appendChild(divReact);
        piu.appendChild(divInfo)

        timeline.appendChild(piu);
        
    });
};

xhr.send();

function criaIcon(src,id) {
    var divCount = document.createElement('div');
    divCount.classList.add('count');
    divCount.setAttribute('id',id);
    var icone = document.createElement('img');
    icone.setAttribute('src', src);
    var num = document.createElement('p');
    num.textContent = '0';
    num.style.visibility = 'hidden';
    divCount.appendChild(icone);
    divCount.appendChild(num);
    return divCount;
}