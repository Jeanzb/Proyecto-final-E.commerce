import { ProductServices } from "../services/producto-service.js";

const boton=document.getElementById("iniciar");
boton.addEventListener("click",(evento)=>{
    evento.preventDefault();
    const url=document.getElementById("url").value;
    const nombre=document.getElementById("nombre").value;
    const categoria=document.getElementById("categoria").value;
    const precio=document.getElementById("precio").value;
    const descripcion=document.getElementById("descripcion").value;
    ProductServices.GuardarProducto(url,nombre,categoria,precio,descripcion).then(respuesta=>{
        console.log("agregado con exito");
        window.location.href="../screens/todos_admin.html";
    }).catch(error=>{
        console.log("ocurrió un error");
    })
});

