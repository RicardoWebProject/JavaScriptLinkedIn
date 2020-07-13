var expresion1 = /\bcat\b/;
/*
    Aquí buscamos limitar el patrón que necesitamos evaluar.
    Forzamos a que se cumpla el patrón.
*/

console.log(expresion1.test("cat"));