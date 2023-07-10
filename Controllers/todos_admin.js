import { ProductServices } from "../services/producto-service.js";

const crearProducto=(url,nombre,precio,id)=>{
    const producto=document.createElement("div");
    let lugar=document.getElementById("todo");
    producto.classList.add("hola");
    const nuevo=`
    <div class="card-productos">
    <img src="${url}" class="imagen-producto" alt="">
    <h3 class="nombre-producto">${nombre}</h3>
    <div class="opciones">
    <p class="precio-producto">$${precio}</p>
                <div class="opciones2">
                <a id="borrar">
                    <img class="logo" src="../assets/images/borrar.png" alt="">
                </a>
                <a href="../screens/editar_producto.html?id=${id}">
                    <img class="logo" src="../assets/images/editar.png" alt="">
                </a>
                </div>
            </div>
</div>`
    producto.innerHTML=nuevo;
    const borrar=producto.querySelector("#borrar");
    borrar.addEventListener("click",(evento)=>{
        ProductServices.EliminarProducto(id).then(respuesta=>{
            console.log("Eliminado con exito");
        }).catch(error=>{
            console.log("ocurrió un error");
        })
    });
    lugar.appendChild(producto);
}


ProductServices.ListaProductos().then((data)=>{
    data.forEach((producto) => {
        crearProducto(producto.url,producto.nombre,producto.precio,producto.id);
    });
})