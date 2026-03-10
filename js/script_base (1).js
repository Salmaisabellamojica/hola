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

    var nombre = document.getElementById("nombre").value
    let nombreValido = /^[a-z]+\s?[a-z]+?$/gim;

    var correo = document.getElementById("correo").value
    let correoValido = correo.match(/[a-zA-Z0-9._-]+@[a-zA-Z0-9_.-]+\.com/gim);

    var edad = document.getElementById("edad").value
    let edadValida = edad.match(/^[0-9]+$/gim); 

    //datos vacíos 
    
    if (nombre == "" || correo == "" || edad == "") {
        alert("El nombre,el correo y la edad son obligatorios")
        return
    }

    if(nombreValido == null){
        alert("Nombre inválido");
    }

    if(edad >0 && edad < 18){
        alert("No puedes comprar productos de esta tienda");
        return
    }else if(edad >= 18){
    
    }else{
        alert("Edad inválida, no puedes comprar productos");
        return
    }
    
    if(correoValido == null){
        alert("Correo inválido");
    }else{
        alert("Formulario enviado correctamente");
    }
    
    document.getElementById("formContacto").reset();
    console.log("Formulario enviado");


}