import { mostrar } from "./app.js";
//Reutilizaré la variable que muestra el nickname

//Función de mensaje aleatorio para el logout, simialr a la utilizada en la pantalla interna.
function mensajeComplementarioAleatorioLogout() {
    //Array con los mensajes posibles:
    const opciones = ["Nos vemos luego,","Hasta la próxima,","¡Vuelve cuando quieras! ","Te esperaremos con nuevos platillos creativos,"]
    //Variable que define un numero aleatorio dentro del rango del array. Este número funcionara como index. 
    const randomIndex = Math.floor(Math.random() * opciones.length)
    //Se imprime el mensaje elegido aleatoriamente en pantalla
    document.getElementById("mensaje-logout-complementario").textContent = opciones[randomIndex]
   
}

//Funcion de logout
function logout() { 
    //Quita el usuario del localStorage
    const usuarioActivo = localStorage.getItem("usuarioActivo");
    mostrar("log-out")
    document.getElementById("logout-nickname").innerText = `${JSON.parse(usuarioActivo).nickname}`;
    localStorage.removeItem("usuarioActivo")
    document.getElementById('nav-p-interna').classList.add('hidden');
    
    // Espera 90 segundos y vuelve a la página de incio
    setTimeout(() => { mostrar("pantalla-inicio") }, 90 * 1000) 
    }

//Llamo a las funciones.
window.addEventListener("DOMContentLoaded", () => {
    mensajeComplementarioAleatorioLogout()
    logout()
})

window.logout = logout;