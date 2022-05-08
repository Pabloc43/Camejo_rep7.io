/*
// Ejercicio 6 (En base al titulo)
function paresEntre(max){
    let cont = 0;
    for (var i = 0; i <= max; i++ ){
        if (i % 2 == 0){
        cont++
        }
    }
    return cont
}

document.write(paresEntre(parseInt(prompt('Ingrese un numero: '))))


// Ejercicio 6 (Enbase a la letra)
var num1 = parseInt(prompt('Ingrese un numero: '))
var num2 = parseInt(prompt('Ingrese otro numero (mayor o igual que el primero): '))
function paresEntre(min, max) {
    var cont = 0
    for (let i = min; i <= max; i++) {
        if (i % 2 == 0) {
            cont++
        }
    }
    return cont
}
paresEntre(num1, num2)


// Ejercicio 7
function Mayor(edad, tope){
    return (edad > tope)
}


// Ejercicio 8
const usuario = 'Pabloc43';
const contra = '123abc';
var inicioUsuario = prompt('Ingrese su usuario: ');
var inicioContra = prompt('Ingrese su contrasenia: ')
function credenciales(nombre, contrasenia) {
    return (nombre == usuario && contrasenia == contra)
}

credenciales(inicioUsuario, inicioContra)


// Ejercicio 9
do {
    var n1 = parseFloat(prompt("Ingrese un numero: "));
    var n2 = parseFloat(prompt("Ingrese otro numero: "));
    if ((n1 - parseInt(n1)) == 0 && (n2 - parseInt(n2)) == 0) {
        alert("La suma de " + n1 + " con " + n2 + " es: " + (n1 + n2))
    } else {
        alert("Error!!!")
    }
} while (n1 + n2 < 100);


// Ejercicio 10
var num1 = parseInt(prompt("Ingrese un numero: "));
function decisor(){
    if (num1 > 10) {
        var num1 = parseInt(prompt("Ingrese un numero: "));
        if (num1 > 100) {
            document.write("A")
            document.write(num1)
        } else {
            document.write("B")
            document.write(num1)
        }
    } else {
        var num1 = parseInt(prompt("Ingrese un numero: "));
        if (num1 > 1000) {
            document.write("C")
            document.write(num1)
        } else {
            document.write("D")
            document.write(num1)
        }
    }
}
decisor()
document.write(num1)
*/