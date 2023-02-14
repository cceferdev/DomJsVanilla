/*document.querySelector('h3')
console.log(document.querySelector('h3'))
console.log(document.querySelector('.h3-danger'))
console.log(document.getElementById('parrafo'))
*/

const parrafo= document.querySelector('#parrafo')
parrafo.textContent= 'texto desde js'
/*para pintar con hmtl y modificr etiquetas */parrafo.innerHTML = '<b>texto con inner y en negrita</b>'
parrafo.classList.add('h3.danger')
 