var expresion1 = /Woo+(hoo+)+/i;

//Woohooooooo!
/*
    Lo que está agrupado entre paréntesis en la expresión regular es lo que se conoce como
    'subexpresiones'.
*/

console.log(expresion1.test('Wooohooohooohooohoooooooohooohooohooohooohooo'));