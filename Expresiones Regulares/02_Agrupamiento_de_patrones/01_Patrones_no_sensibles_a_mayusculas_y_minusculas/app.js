var expresion1 = /Hola Mundo/i;
/*
    La letra 'i le dice a la expresión regular que no importa si viene en mayúsculas o minúsculas,
    el contenido lo evaluará siempre de la misma forma
*/

console.log(expresion1.test('Hola mundo'));