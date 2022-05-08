/*
// Ejercicio 1
var pFavorita = {
    nombre : "Pelicula",
    año : 1999,
    director : "Uno bueno",
    actoresPrincipales : ["Uno malo", "Una crack", "Un tipazo"],
    duracion : 142,
    genero : "Ciencia ficcion"
}
for ( atributo in pFavorita) {
    document.write("<li>" + atributo + ': ' + pFavorita[atributo] + '</li>')
}
document.write("<hr>".repeat(2))


// Ejercicio 2
pFavorita.paisOrigen = "Made in China";
pFavorita.idiomaOrigen = "English";
pFavorita.ATP = true;
pFavorita.propiedades = function (){
    for (this.atributo in pFavorita){
        document.write("<li>" + this.atributo + ': ' + pFavorita[this.atributo] + '</li>')
    }
};
pFavorita.propiedades();
delete pFavorita.genero;


// Ejercicio 3
function calculadora100tifika(){
    var num1 = parseInt(prompt("Ingrese un numero: "));
    var operacion = prompt("Ingrese la operacion: ");
    if (operacion != 'sqr' && operacion != 'sqrt' && operacion != 'log'){
        var num2 = parseInt(prompt("Ingrese otro numero: "))
    }
    var result;
    switch (operacion) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1*num2;
            break;
        case '/':
            if (num2 == 0){
                return alert('Cuando la operacion es la division, el segundo valor ingresado no puede ser 0')
            }
            else{
                result = num1/num2;
            break;
            }
        case 'sqr':
            result = Math.pow(num1, 2);
            break;
        case 'sqrt':
            if (num1 >= 0) {
                result = Math.sqrt(num1)
                break;
            } else {
                return alert('El numero debe ser mayor o igual que 0')
            }
        case 'log':
            if (num1 > 0) {
                result = Math.log10(num2)
                break;
            } else {
                return alert('El numero debe ser mayor que 0')
            }
        case '^':
            result = Math.pow(num1, num2);
            break;
        default:
            return alert('Solo es posible realizar una de las operaciones indicadas, verifique si ' + '"' + operacion + '"' + ' esta entre ellas.')
    }
    document.write("El resultado es: " + result + '<br>' + '<a href="./index.html">Volver</a>') 
}


// Ejercicio 4
var mes = parseInt(prompt("Ingrese un numero mayor o igual 1: "))
var anio = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
if (mes <= 12 && mes >= 1){
    alert(anio[mes - 1])
}
else if (mes > 12){
    mes = mes % 12;
    alert(anio[mes - 1])
}


// Ejercicio 5
var estudiantes = [
    {nombre:"Valentin", edad: 17 , generoMusical: "K-pop", mascotas: 2, gustos: {deporte: "Bailar", helado: "Menta granizada"}, curso:"Matea" },
    {nombre:"Tamara", edad: 20 , generoMusical: "K-pop", mascotas: 3, gustos: {deporte: "Basketball", helado: "Dulce de leche granizado"}, curso:"Matea" },
    {nombre:"Gabriel", edad: 25 , generoMusical: "Rock Nacional", mascotas: 3, gustos: {deporte: "volley ball", helado: "Chocolate"}, curso:"Matea" },
    {nombre:"Nahuel", edad: 19 , generoMusical: "Cumbia", mascotas: 1, gustos: {deporte: "Ping-pong", helado: "Vainilla"}, curso:"Matea" },
    {nombre:"Franco", edad: 23 , generoMusical: "Pop", mascotas: 2, gustos: {deporte: "volley ball", helado: "sambayon"}, curso:"Matea" }
]

for (let i = 0; i < estudiantes.length; i++) {
    for (atributo in estudiantes[i]) {
        if (atributo == "gustos") continue
        document.write("<li>" + atributo + ': ' + estudiantes[i][atributo] + '</li>')
    }
    document.write("<li>" + "Gustos: " + estudiantes[i].gustos.deporte + ", " + estudiantes[i].gustos.helado + "</li>" +"<br>" )
}


// Ejercicio 6
var comentarios = [] 
function comentar(){
    coment = prompt("Comentar: ")
    comentarios.push(new comentario("", new Date().getDay() + "/" + new Date().getMonth() + "/" + new Date().getFullYear() + " - " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()))
    comentarios[comentarios.length - 1].com()
}

class comentario {
    constructor(contenido, fecha){
        this.contenido = contenido;
        this.fecha = fecha;
    }
    com(){
        this.contenido = coment
    }
}
function verComentarios(){
    for (let i = 0; i < comentarios.length; i++) {
        document.write("<li>" + comentarios[i].contenido + "  " + comentarios[i].fecha + "</li>" + "<br>")
    }
}


// Ejercicio 7
class peliFavor{
    constructor(nombre, anio, director, actoresPrincipales, duracion, genero){
        this.nombre = nombre;
        this.anio = anio;
        this.director = director;
        this.actoresPrincipales = actoresPrincipales;
        this.duracion = duracion;
        this.genero = genero
    }
}

var peliculas = []
peliculas.push(new peliFavor('alguna', 1999, "gerardo", "julieta", 123, "drama"));
peliculas.push(new peliFavor('buena', 1999, "gerardo", "julieta", 123, "drama"));
peliculas.push(new peliFavor('mala', 1999, "gerardo", "julieta", 123, "drama"));
peliculas.push(new peliFavor('o lo que sea', 1999, "gerardo", "julieta", 123, "drama"));
peliculas.push(new peliFavor('alguna mas', 1999, "gerardo", "julieta", 123, "drama"));
console.log(peliculas)
peliculas.sort((obj1, obj2) => {
    if (obj1.nombre < obj2.nombre) {
        return -1;
    }
    else if (obj1.nombre > obj2.nombre){
        return 1;
    }
    else{
        return 0
    }
})
for (let i = 0; i < peliculas.length; i++) {
    for (atributo in peliculas[i]) {
        document.write("<li>" + atributo + ': ' + peliculas[i][atributo] + '</li>')
    }
    document.write("<br>")
}
*/