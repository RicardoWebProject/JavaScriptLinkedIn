var expresion1 = /\d+/.exec('Del año 1984')

/*
    exec() recibe como parámetro el téxto o cadena de texto que se evaluará.
    Este método devuelve mucha más información de la evaluación.
*/

console.log(expresion1);

console.log("Hasta 1994".match(/\d+/))

/*
    match()
    Toda cadena de texto en JS tiene asignado un método llamado match.
    Con este método se puede realizar la evaluación que se necesite.
    Este aplica la evaluación directamente sin necesidad de pasar estos valores hacia una variable.
    Devuelve un valor similar al método exec.
*/