var mensaje = 'El cliente pidió sushi y comió su sushi, sushi, sushi, sushi';

console.log(mensaje.replace(/i/g, 'o'));
/*
    El método replace() sirve para reemplazar ciertos bloques, cadenas o caracteres dentro
    de una cadena de texto mayor.
    Está disponible para todas las cadenas de texto.
    Lo importante en este caso es el reemplazo de una cadena de acuerdo a las reglas de la
    expresión regular.
    - Con el indicador 'g', le estamos indicando a la expresión regular que hará la búsqueda de manera
    global. No solamente aplicará, por tanto, a la primera aparición en la iteración.
*/