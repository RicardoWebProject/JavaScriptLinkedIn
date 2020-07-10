/*
	Cuando se está trabajando en código con varias operaciones que pueden llegar a repetirse,
	lo más conveniente es crear funciones y encapsular estas operaciones, en lugar de repetir
	manualmente cada operación que necesitemos.
*/
var cuenta = 2 + 3;

var cuentaNueva = 20 + 45;

var totalFinal = cuenta + cuentaNueva;

console.log(totalFinal);

function suma(datoA, datoB){
	var resultado = datoA + datoB;
	return resultado;
}

suma(2,3);

var cuentaFinal = suma(suma(2, 3), suma(20, 45));

//suma(5, 65)
console.log(cuentaFinal)
