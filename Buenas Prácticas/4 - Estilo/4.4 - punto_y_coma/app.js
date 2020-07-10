var tienda = {
    nombre: "Tienda las 4 esquinas",
    calcular: function(costo1, costo2) {
        return costo1 + costo2;
    },
    saludar: function() {
        var mensaje = "Hola ";
        return mensaje;
    }
};

var btnSaludar = document.getElementById("btnSaludar");

btnSaludar.addEventListener('click', function() {
    console.log(tienda.saludar());
});

/*
    JS No exige que se escriba el punto y coma.
    Es una buena práctica para este lenguaje el que se escriba el punto y coma para saber en qué momento
    se está terminando de ejecutar una sentencia.
*/