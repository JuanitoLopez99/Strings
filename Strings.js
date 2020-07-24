var nombre = "Juanito", apellido = "López", edad = 20;
var nombreEnMayusculas = nombre.toUpperCase(), apellidoEnMayusculas = apellido.toUpperCase();
var nombreEnMinusculas = nombre.toLowerCase(), apellidoEnMinusculas = apellido.toLowerCase();
var primeraLetraDelNombre = nombre.charAt(0);
var cantidadDeLetrasDelNombre = nombre.length;

var nombreCompleto = `${nombre} ${apellido}`;


console.log("Desafio = Mostrar al Usuario la Ultima Letra del su Nombre");

var ultimaLetraDelNombre = nombre.substr(-1);
