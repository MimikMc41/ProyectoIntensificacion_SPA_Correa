//Muestro los botones de navegacipón solo disponibles en la página interna.
document.getElementById('nav-p-interna').classList.remove('hidden')

//FUnción para el mensaje que cambai según la hora.
function saludoHora() {
    /* Crea un objeto con una funcion constructora (Date) que toma la fecha y el horario del sistema.
    Luego devuelve la hora como un núemro entero.*/
    const hora = new Date().getHours()
    //Declaramos la varibale que contendrá el mensaje. Se reasiganra cada vez que cambie.
    let saludo = ""
    //Validaciones y cambio de mensaje
    if (hora >= 5 && hora <= 13) {
        saludo = "Buenos días,"
    } else if (hora > 13 && hora <= 20) {
        saludo = "Buenas tardes,"
    } else {
        saludo = "Buenas noches,"
    }
    //Imprime el mensaje en pantalla
    document.getElementById("saludo-bienvenida").textContent = saludo
}

//Función para agregar el nombre del usuario que inicio sesión
function mostrarNickname() {
    //Obtenemos el objeto creado ya sea en el login o el register.
    const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"))
    //Si el ususario activo existe y teien un valor
    if (usuarioActivo) {
        //Los mensajess con el nickname se reemplazan por el valor de esta misma propiedad.
        document.querySelectorAll(".mensaje-nickname").forEach(el => { el.textContent = usuarioActivo.nickname })
    }
}

//Función para el mensaje alaetorio
function mensajeComplementarioAleatorio() {
    //Array con los mensajes posibles:
    const opciones = ["El menú de hoy está listo para vos.", "Hora de encender los fuegos creativos.", "¿Listo para empezar a cocinar?", "Todo servido, ¡a disfrutar la receta!", "La cocina está abierta, ¡manos a la obra!"]
    //Variable que define un numero aleatorio dentro del rango del array. Este número funcionara como index. 
    const randomIndex = Math.floor(Math.random() * opciones.length)
    //Se imprime el mensaje elegido aleatoriamente en pantalla
    document.getElementById("mensaje-bienvenida-complementario").textContent = opciones[randomIndex]
}

//Se ecutan las funciones cuando la pantalla termina de cargarse
window.addEventListener("DOMContentLoaded", () => {
    saludoHora()
    mensajeComplementarioAleatorio()
    mostrarNickname()
})

