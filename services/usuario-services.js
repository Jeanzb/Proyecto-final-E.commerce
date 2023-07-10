export const ListaUsuarios=() =>{
    return fetch("https://json-service-ecommerce.onrender.com/usuarios").then(respuesta => respuesta.json());
};