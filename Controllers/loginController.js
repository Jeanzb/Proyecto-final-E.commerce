import { ListaUsuarios } from "../services/usuario-services.js";

const boton = document.getElementById("iniciar");
boton.addEventListener("click", async (evento) => {
  evento.preventDefault();
  const nombre = document.getElementById("usuario").value;
  const clave = document.getElementById("clave").value;
  await validarUsuario(nombre, clave);
});

const validarUsuario = async (nombre, clave) => {
  try {
    const usuarios = await ListaUsuarios();
    const respuesta = usuarios.some((usuario) => {
      return usuario.nombre === nombre && usuario.clave === clave;
    });
    if (respuesta) {
      window.location.href = "../screens/todos_admin.html";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  } catch (error) {
    console.log("Ocurrió un error al validar el usuario");
    alert("Ocurrió un error al validar el usuario");
  }
};
