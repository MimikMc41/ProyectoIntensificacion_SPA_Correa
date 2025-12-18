import { obtenerUsuarios } from "./app.js";

function agregarTarea() {
    const usuario = JSON.parse(localStorage.getItem("usuarioActivo"))
    const nombreTarea = document.getElementById('nombre-tarea').value
    const usuarios = obtenerUsuarios()
    let usuarioExistente = usuarios.find(u => { return u.email === usuario.email })

    if (usuario) {
        usuario.tareas.push(nombreTarea);
        localStorage.setItem("usuarioActivo", (JSON.stringify(usuario)));
    }

    if (usuarioExistente) {
        usuarioExistente = usuario
        localStorage.setItem("usuarios", (JSON.stringify(usuarios)));
    }

    let contenedorTareas = document.getElementById('contenedor-tareas')
    usuarioExistente.tareas.forEach(tarea => {

        contenedorTareas.innerHTML += `
        <div class="tarea">
            <p>${tarea}</p>
            <button>x</button>
        </div>`
    })
}



document.getElementById('form-agregar-tarea').addEventListener('submit', function (event) {
    event.preventDefault();
    agregarTarea();
}
);


