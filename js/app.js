
// Función formualrio register
function register(){

const username = document.getElementById('username').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

if (username === ""|| email === "" || password === "") {
    alert('Debe completar todos los campos.');
    return;
}

const user = {username, email, password};
console.log('Usuario registrado:', user);
let usuarios = obtenerUsuarios();
usuarios.push(user);
localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

document.getElementById('form-registro').addEventListener('submit', function(event) {
    event.preventDefault();
    register();
    mostrar('p-interna')
}
);


// Función para obtener usuarios desde localStorage
function obtenerUsuarios()
{

const usuarios = localStorage.getItem('usuarios')

let usuariosArray = [];

if (usuarios) {
    usuariosArray = JSON.parse(usuarios);
}
console.log(usuariosArray);
return usuariosArray;
}

// Función ocultar y mostrar secciones
function mostrar(id) {
  const vistas = document.querySelectorAll('.active');
  
  vistas.forEach(i => {
    i.classList.add('hidden');
  });

  document.getElementById(id).classList.remove('hidden');
}