const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);

//console.log(encabezado.innerText); // si el el CSS - visibility: hidden; no lo encontrara
//console.log(encabezado.textContent); // si lo encontrará
//console.log(encabezado.innerHTML); // se trae el HTML

//const nuevoHeading = 'Nuevo Heading';
//document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg'


