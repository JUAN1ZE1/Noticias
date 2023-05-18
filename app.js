const menu = document.getElementById('menu');
const indicador = document.getElementById('indicador');
const secciones = document.querySelectorAll('.seccion');

let tamañoIndicador = menu.querySelector('a').offsetWidth;
indicador.style.width = tamañoIndicador + 'px';

let indexSecccionActiva;

//Observador
const observer = new IntersectionObserver((entradas) =>{
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
           indexSecccionActiva = [...secciones].indexOf(entrada.target);
           indicador.style.transform = 'transLateX(${tamañoIndicador * indexSeccionActiva}px)';
        }
    });
}, {
    rootMargin: '-80px 0px 0px 0px',
    threshold: 0.2
});



// Asignamos un observador a cada una de las secciones
secciones.forEach(seccion => observer.observe(seccion));

//evento para que cuando la pantalla cambie de tamaño
const onResize = () =>{

    tamañoIndicador = menu.querySelector('a').offsetWidth;

    //cambiamos el tamaño del indicador
    indicador.style.width = '${tamañoIndicador}px';

    //Vamos a volver a posicionar el indicador
    indicador.style.transform = 'transLateX(${tamañoIndicador * indexSeccionActiva}px)';
}

window.addEventListener('resize',onResize);