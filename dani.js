
const skillsSection = document.querySelector('#skills');

const coordenadasSkills = skillsSection.getBoundingClientRect();

let firedLinea = true;

const camurillo = document.querySelector('.camuritoentero');



let camuroInitial = 100; 
let camuroTarget = 45;

let camuroTrue = true;

//console.log(coordenadasSkills.top);
//console.log(window.scrollY);

function liniecita(elemento, valor) {
    
    let secondValor = 0;
  
    let growing = function () {
        if (secondValor <= valor) {
            secondValor++;
            elemento.style.width = `${secondValor}%`;

        } else {
            clearInterval(id);
        }
       
    };
    
    let id = setInterval(growing, 10);

    elemento.style.display = 'inline-block';
    elemento.style.height = '1.9vh';
    elemento.style.border = '1px solid #4c8932';
    elemento.style.marginLeft = '3%';
   elemento.style.backgroundColor = '#74d04c';
    elemento.style.borderRadius = '35px';
    elemento.style.boxShadow = 'inset 0 -1px 1px rgba(255, 255, 255, 0.3)';
    
   
};


//voy a hacer el efecto del camurito y las lineas con el intersection observer:

/*

window.addEventListener('scroll', () => {
    
   
    if (window.scrollY >= coordenadasSkills.top && firedLinea === true) {
        
        liniecita(document.getElementById('linea'), 70);
        liniecita(document.getElementById('lineaafter'), 60);
        liniecita(document.getElementById('ilustrador'), 50);
        liniecita(document.getElementById('photoshopiador'), 45);
        liniecita(document.getElementById('brandiador'), 75);
        liniecita(document.getElementById('photographer'), 65);
        liniecita(document.getElementById('gamer'), 45);
        liniecita(document.getElementById('developer'), 50);
        liniecita(document.getElementById('motions'), 50);
        liniecita(document.getElementById('uxing'), 70);
        liniecita(document.getElementById('editorials'), 75);
        liniecita(document.getElementById('webdesigner'), 50);
        

        firedLinea = false;

    }

})


function showingCamurito() {
    
//poner la posicion del camurito de 100 a 45%
 //camurillo.style.left = '95%';
    
    if (camuroInitial >= camuroTarget && camuroTrue) {
        camuroInitial--;
        camurillo.style.left = `${camuroInitial}%`;
    } else {
        camuroTrue = false;
        clearInterval(intervaloCamuro);
    }

};

let intervaloCamuro = setInterval(showingCamurito, 20);

*/

//INTERSECTION OBSERVER CAMURO:

let intervalId;

const camuroOptions = {
    root: null,
    threshold:1 , //esto es 10 porciento del view es de 0 a 1
    rootMargin: '0px 80% 0px 0px'       //'0px 300px 0px'
};



function movingCamuro() {
    console.log("movingCamuro");
    if (camuroInitial >= camuroTarget) {
        camuroInitial--;
        console.log(camuroInitial); 
        camurillo.style.left = `${camuroInitial}%`;
    } else {
        clearInterval(intervalId);
    }
};



const camuroCallBack = function (entries, observer) {
    
    entries.forEach(entry => {
        

        if (entry.isIntersecting){ //&& camuroTrue) {
            console.log(entry + 'natibela');
            intervalId = setInterval(movingCamuro,10 )
        } 
    });

};

const intersectionCamuro = new IntersectionObserver(camuroCallBack, camuroOptions);

intersectionCamuro.observe(camurillo);


//HACIENDO LAS LINEAS CON INTERSECTION OBSERVER: