import { mostrar } from "./app.js"
import { obtenerUsuarios } from "./app.js";


// Función formulario register
function register() {
    //Borra todos los errores del div de errores si es que hay.
    document.getElementById('errores-registro').innerHTML = ""
    // Cada valor proporcionado se guarda en una variable local.
    const username = document.getElementById('username').value;
    const nickname = document.getElementById('nickname').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const policyAgreement = document.getElementById('policy-agreement').checked

    //Creo un array vacío para almacenar todos los errores que salten y luego mostrarlos de una. Es una variable local.
    let errores = []

    // Se obtienen los usuarios ya registrados en la página y se guardan en una variable. Esto es necesario para alguans validaciones.
    const usuarios = obtenerUsuarios();

    //VALIDACIONES DE REGISTER
    //Variable que devuelve true si ya hay un objeto usuario con ese nombre.
    const usuarioExistente = usuarios.some(usuario => usuario.username === username)

    //Variable de validación para el nickname
    const nicknameExistente = usuarios.some(usuario => usuario.nickname === username)

    // Valida que ningún campo este vacio y suelta un error si es así
    if (username === "" || nickname === "" || password === "" || email === "") {
        errores.push("Error 1: Debe completar todos los campos.")
    }
    // Valida que el nombre y apellido no se encuentren en el localStorage con la variable creada anteriormente.
    if (usuarioExistente === true) {
        errores.push("Error 2: El nombre y apellido seleccionados ya existen. Por favor, elija otros o recupere su cuenta.")
    }
    //Valida que el nickname no se encuentre en el localStorage
    if (nicknameExistente === true) {
        errores.push("Error 3: El nickname seleccionado ya existe. Por favor, elija otro.")
    }
    //Valida que la contraseña cumpla los requisitos 
    if (
        password.length < 6 ||
        !/[a-z]/.test(password) ||
        !/[A-Z]/.test(password) ||
        !/[0-9]/.test(password) ||
        !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        errores.push("Error 4: Compruebe que la contraseña cumpla con lo solicitado.")
    }

    if (policyAgreement === false) {
        errores.push('Error 5: Debes aceptar las políticas de privacidad y condiciones de uso.')
    }

    // Se crea una varibale que guarda un objeto con los datos del usuario (variables anteriores) como atributos.
    errores.forEach(error => { document.getElementById('errores-registro').innerHTML += `<p class="error">${error}</p>` })

    //Detiene la función si encuentra errores.
    if (errores.length > 0) {
        return
    }

    //Si el array esta vacío (no hay errores) entonces...
    //Crea un obejto para gaurdar el usuario con los atributos de este.
    const user = {username, nickname, password, email};

    //Se añade el usuario nuevo al array de usuarios.
    usuarios.push(user);

    //Se reeescribe el localStorage, guardando el array actualizado en formato JSON legible y bajo le nombre 'usuarios'.
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    mostrar('p-interna')
    //Se incluye el mismo usuario creado como usuario activo, casi de la misma forma que en el login, epro aprovechando el obejto user creado.
    localStorage.setItem("usuarioActivo", JSON.stringify(user))
}

/* Escucha el evento "onclick" del botón que envia el formulario de registro, evita que se recargue la página
y se envien datos al servidor (comportamiento por defecto del botón submit), llama a la función bque registra al usuario en el localStorage si los datos son correctos y muestra la página interna*/
document.getElementById('form-registro').addEventListener('submit', function (event) {
    event.preventDefault();
    register();
}
);