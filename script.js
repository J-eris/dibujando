let texto = document.getElementById("txtLineas");
let boton = document.getElementById("btn");
boton.addEventListener("click", dibujoClick);

let d = document.getElementById("dibujo");
let ancho = d.width;
let lienzo= d.getContext("2d");


//Es lo mismo solo que con ciclo while
// while (l < lineas) {
// yi = 10 * 1;
// xf = 10 * (l + 1);
// dibujarLinea(colorcito, 0, yi, xf, 300);
// console.log("Linea " + l);
// l = l + 1;
// }

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujoClick() {
	let lineas= parseInt(texto.value);
	let l= 0;
	let yi, xf;
	let colorcito = "#FAA";
	let espacio = ancho / lineas;

	for (let l = 0; l < lineas; l++) {
		yi = espacio * l;
		xf = espacio * (l + 1);
		dibujarLinea(colorcito, 0, yi, xf, 300);
		console.log("Linea " + l);
}

dibujarLinea(colorcito, 1, 1, 1, 299);
dibujarLinea(colorcito, 1, 299, 299, 299);

}