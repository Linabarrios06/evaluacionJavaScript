//Funcion sirve para mostar opciones al momento de dar click a un boton 
function mostrarOpciones() {
    //document representa cualquier pag web caragada en el navegador 
    //getElementById nos ayuda a llamar un elemento por medio del ID que le pusimos a este
    document.getElementById("opcionesMenu").style.display = "block"; //.style.display="block" especifica si un elemento es tratado como block (para que el boton fucnione con la interaccion)
    document.getElementById("menu").style.display = "none";//none permite desactivar la visualizacion del elemento 
    document.getElementById("contenido").style.display = "block";
}
//Funcion sirve para calcular el total de planes que el usuario pida
function calcularTotal() {
    //Va a guardar la compañia que el ususrio seleccione 
    //var sirve para declarar una variable 
    var telefonia = document.getElementById("telefonia").value; // value sirve para conevtir un objeto a un valor primitivo 
    var cantidad = parseInt(prompt("Ingrese la cantidad de planes que desea alquirir el dia hoy,(SI QUIERE VER EL PRECIO UNITARIO DE DICHO PLAN DIGITE 0)"));
                //parInt es para ingresar datos numeros enteros


    //switch para determinar el precio unitario de cada compañia 
    switch (telefonia) {
        case "Tigo":
            var precioUnitario = 36000; // Precio de un plan de Tigo
            break;
        case "Claro":
            var precioUnitario = 38300; // Precio de un plan de Claro
            break;
        case "Wom":
            var precioUnitario = 30000; // Precio de un plan de Wow
            break;
        case "Virgin Mobile":
            var precioUnitario = 28500; // Precio de un plan de Virgilio Móvil
            break;
        case "Movistar":
            var precioUnitario = 35400; // Precio de un plan de Movistar
            break;
        default: //Default permite exportar funciones 
            console.log("Compañía no válida"); //console.log muiestra un anuncio informativo
            return; // return le da cierra al switch
    }

    var totalPagar = cantidad * precioUnitario;
    // Mostrar los datos del pedido y el total a pagar
    var datosPedido = `Compañía: ${telefonia}\nLa Cantidad De Planes Adquiridos Por Esta Compañía Es De: ${cantidad}\nPrecio Del Plan Unitario(Mes): ${precioUnitario}\nTotal a Pagar: ${totalPagar}`;
    document.getElementById("pedido").innerText = datosPedido; // .innerText nos permite cambiar el contenido de texto de un elemento
    document.getElementById("total").innerText = `Total a Pagar Por su Plan De Telefonia Seria De: $${totalPagar}`;
}