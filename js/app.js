// Función para ocultar y mostrar secciones
export function mostrar(id) {
  // Guarda todos los elementos con la clase active en una variablke constante llamada activePantallas
  const activePantallas = document.querySelectorAll('.active');

  //Luego a cada elemento con dicha clase se le agrga la clase hidden. Esto a través de un bucle for en su forma simplificada.
  activePantallas.forEach(i => {
    i.classList.add('hidden');
  });

  /*Luego obtiene el argumento id que se le pasa (correspondiente al identificador de la pantalla que se queire mostrar)
  y se quita la clase hidden, permitiendo que se muestre su contenido neuvamente.*/
  document.getElementById(id).classList.remove('hidden');
}

//Permite que se llamen funciones desde el index, convirtiendolas en objetos globales.
window.mostrar = mostrar

// Función para obtener usuarios desde localStorage
export function obtenerUsuarios() {
  //Se obtiene el JSON que gaurdamos anteriromente como 'usuarios' y lo guarda en una nueva variable local.
  const usuarios = localStorage.getItem('usuarios')

  //Crea un array para los ususarios
  let usuariosArray = [];

  //QVericiaque usuarios exista y no sea null op una cadena vacía.
  if (usuarios) {
    //Si es así, convierte a los string JSON en un objeto de JavaScript modificable.
    usuariosArray = JSON.parse(usuarios);
  }

  //Retorna el array de objetos.
  return usuariosArray;
}

// Verifica si hay un usuario activo al cargar la página y cambiar la interfaz del menú
window.onload = function() {
  //Verifica si hay un usuario activo en el localStorage al cargar la página
  const usuarioActivo = localStorage.getItem("usuarioActivo");
  //Si hay un usuario activo, muestra la pantalla interna
  if (usuarioActivo) {
    this.document.getElementById('nav-p-interna').classList.remove('hidden');
    document.getElementById("mensaje-nickname").innerHTML = `${JSON.parse(usuarioActivo).nickname}`;
  } else {
    //Si no hay un usuario activo, muestra la pantalla de inicio
    this.document.getElementById('nav-p-interna').classList.add('hidden');
    mostrar('pantalla-inicio');
  }
}

// modo oscuro
let mode = 'claro'; // Valor inicial del modo
function themeMode() {
  const body = document.body;
  const logo = document.getElementById('main-logo');
  if (mode === 'claro') {
    body.classList.add('dark-mode');
    logo.src = './assets/logo-principal-inicio-blanco.png';
    mode = 'oscuro';
  } else {
    body.classList.remove('dark-mode');
    logo.src = './assets/logo-principal-inicio.png';
    mode = 'claro'; 
  }
}
window.themeMode = themeMode; // Permite que se llame desde el index.html