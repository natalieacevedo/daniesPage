
function liniecita(elemento,valor) {
    
   elemento.style.display = 'inline-block';
    elemento.style.width = `${valor}%`;
   elemento.style.borderBottom = '1px solid blueviolet';
    elemento.style.marginLeft = '3%';
   
};

//console.log(document.getElementById('linea'));



liniecita(document.getElementById('linea'), 80);
liniecita(document.getElementById('lineaafter'), 60);
liniecita(document.getElementById('ilustrador'), 50);
liniecita(document.getElementById('photoshopiador'), 45);
liniecita(document.getElementById('brandiador'), 75);
liniecita(document.getElementById('photographer'), 65);
liniecita(document.getElementById('gamer'), 45);
liniecita(document.getElementById('developer'), 50);
liniecita(document.getElementById('motions'), 50);
liniecita(document.getElementById('uxing'), 70);
liniecita(document.getElementById('editorials'), 80);
liniecita(document.getElementById('webdesigner'), 50);
