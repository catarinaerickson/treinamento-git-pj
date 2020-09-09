var inputPesquisa = document.querySelector('#pesquisar');
var widgets = document.querySelectorAll('.widget');
var divWidgets = document.querySelector('.widgets');

xhr.addEventListener('load', function() {
    console.log(xhr.response);
    var arr = xhr.response;

    var novoWidget = document.createElement('div');
    novoWidget.classList.add('widget');
    novoWidget.classList.add('invisible');
    var title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'Resultado da busca';
    var ul = document.createElement('ul');
    arr.forEach(function(obj) {
        var li = document.createElement('li');
        li.classList.add('user');
        
        var pic = document.createElement('div');
        pic.classList.add('pic');
        var img = document.createElement('img');
        img.setAttribute('src', obj.imagem);
        pic.appendChild(img);

        var text = document.createElement('div');
        text.classList.add('text');
        var name = document.createElement('strong');
        name.textContent = obj.nome;
        var username = document.createElement('p');
        username.textContent = obj.username;
        text.appendChild(name);
        text.appendChild(username);

        var button = document.createElement('button');
        button.innerHTML = 'Seguindo';

        li.appendChild(pic);
        li.appendChild(text);
        li.appendChild(button);

        ul.appendChild(li);
    });
    novoWidget.appendChild(title);
    novoWidget.appendChild(ul);
    divWidgets.insertBefore(novoWidget, divWidgets.children[1]);

    var widgetAviso = document.createElement('div');
    widgetAviso.classList.add('widget');
    widgetAviso.classList.add('invisible');
    var desculpa = document.createElement('div');
    desculpa.classList.add('title');
    desculpa.textContent = 'Desculpe!';
    var ulAviso = document.createElement('ul');
    var liAviso = document.createElement('li');
    var text = document.createElement('div');
    text.classList.add('text');
    var aviso = document.createElement('p');
    aviso.textContent = 'Não encontramos ninguém com esse nome';
    text.appendChild(aviso);
    liAviso.appendChild(text);
    ulAviso.appendChild(liAviso);
    widgetAviso.appendChild(desculpa);
    widgetAviso.appendChild(ulAviso);
    divWidgets.appendChild(widgetAviso);
    
    inputPesquisa.addEventListener('input', function(){
        var users = document.querySelectorAll('.user');
        
        if (this.value.length > 0) {
            widgets[0].classList.add('invisible');
            widgets[1].classList.add('invisible');
            novoWidget.classList.remove('invisible');
            var all = 0;
            
            for (i=0; i < users.length; i++){
                user = users[i]
                var infoUser = user.querySelector('.text');
                var nome = infoUser.textContent;
                var busca = new RegExp(this.value, 'i');
                if (!busca.test(nome)) {
                    user.classList.add('invisible');
                    all += 1;
                } else {
                    user.classList.remove('invisible');
                    widgetAviso.classList.add('invisible')
                }
            };
            if (all == users.length) {
                novoWidget.classList.add('invisible');
                widgetAviso.classList.remove('invisible');
                all = 0;                
            };
        } else {
            widgetAviso.classList.add('invisible');
            novoWidget.classList.add('invisible');
            widgets[0].classList.remove('invisible');
            widgets[1].classList.remove('invisible');
        };                

    });
});