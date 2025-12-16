import { mostrar } from "./app.js"
import { obtenerUsuarios } from "./app.js";

//Función formulario de inicio de sesión (log-in)
function login() {
    //Borra todos los errores del div de errores si es que hay.
    document.getElementById('errores-login').innerHTML = ""
    //Obtenemos los datos ingresados y los gaurdamos en variables.
    const userId = document.getElementById('userId').value
    const password = document.getElementById('password-login').value
    //Cargamos los usuarios en el localStorage
    const usuarios = obtenerUsuarios()
    /*Definimos una variable que ejecuta la condicion a cada elemento del array y devuelve true si encuentra un resultaod y false si no encuentra ninguno.
    Verifica ambos usuario y contraseña por cada elemento del array. Si alguno de los dos es falso devovlverá false.
    Utilizaré esta variable más adelante como una bandera para definir i la contrañse aes correcta.
    */
    const contraseñaCorrecta = usuarios.find(usuario => { return ((usuario.username === userId || usuario.nickname === userId || usuario.email === userId) && usuario.password === password) })

    //Defino una función similar para comprobar que el ususario exista. Devolvera true si existe.
    const usuarioExistente = usuarios.find(usuario => { return (usuario.username === userId || usuario.nickname === userId || usuario.email === userId) })

    //VALIDACIONES
    //Array de errores
    let errores = []
    //Combropbar que los campos no esten vacios
    if (userId === "" || password === "") {
        errores.push("Error 1: Debe completar todos los campos.")
    }
    
    //Si el usuario no existe
    if (!usuarioExistente) {
        errores.push("Error 6: El nombre y apellido, nickname o correo electróncio no están registrados. Compruebe que se hayan escrito correctamente o registrese.")
    }

    //Si la contraseña no coincide con un usuario.
    if (!contraseñaCorrecta) {
        errores.push("Error 7: La contraseña ingresada es incorrecta, intentalo de nuevo o contáctese con el soporte técnico.") 
    }

    //Imprimos los errores
    errores.forEach(error => { document.getElementById('errores-login').innerHTML += `<p class="error">${error}</p>` })

    //Detiene la función si encuentra errores.
    if (errores.length > 0) {
        return
    }

    //Se agrega un usaurio activo al local storage aprovechando el objeto que obtiene usuarioExistente
    localStorage.setItem("usuarioActivo", JSON.stringify(usuarioExistente))
    
    //Si no encuentra errores entonces lleva a la pantalla interna:
    mostrar('p-interna')
}


//Escuchador de evento
document.getElementById('form-login').addEventListener('submit', function (event) {
    event.preventDefault();
    login();
}
);

