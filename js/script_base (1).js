function cambiarTexto(){

    let texto = document.getElementById("descripcion");

    if(texto.innerHTML === "Ahora estás viendo nuestras ofertas!"){
        texto.innerHTML = "La mejor tienda de tecnología.";

    }else{
    
        texto.innerHTML = "Ahora estás viendo nuestras ofertas!";

    }

}

let color = true

function modoOscuro() {

    if(color){
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        color = false
        document.getElementById("modoOscuro").innerHTML = "Modo claro"
    }else{
        color = true
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        document.getElementById("modoOscuro").innerHTML = "Modo oscuro"
    }

}

let carrito = 0

function agregarCarrito() {

    carrito++
    console.log("Productos en carrito: " + carrito)

}

function enviarFormulario() {

    let nombre = document.getElementById("nombre").value
    let correo = document.getElementById("correo").value

    if (nombre == "") {
        alert("El nombre es obligatorio")
    }

    console.log("Formulario enviado")

}