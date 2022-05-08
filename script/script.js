/*
// Ejercicio 1
var famosos = [];
var x = prompt('Ingrese un famoso: ');
while (x != '') {
    famosos.push(x)
    x = prompt('Ingrese otro famoso: ')
}


// Ejercicio 2
function volteoStr(){
    var cadena = prompt('Ingrese una palabra: ');
    cadena = cadena.split('')
    cadena.reverse()
    cadena = cadena.join('')
    return alert(cadena);
}


// Ejercicio 3
var palabra = prompt("Ingrese una palabra: ")
function ordenAlf(){
    alert(palabra.split('').sort().join(""));
}


// Ejercicio 4
var numeros = [];
for (let i = 0; i < 50; i++) {
    numeros.push(i+1);
}
var numerosPares = numeros.filter(numero => numero%2 == 0)


// Ejercicio 5
var nombres = [];
var x = prompt('Ingrese un famoso: ');
while (x != '') {
    nombres.push(x)
    x = prompt('Ingrese otro famoso: ')
}
var cadenaFam = nombres.join('.')
document.write(cadenaFam)
*/