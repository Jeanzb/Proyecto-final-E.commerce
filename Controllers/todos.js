import { ProductServices } from "../services/producto-service.js";

const crearProducto=(url,nombre,precio,id)=>{
    const producto=document.createElement("div");
    let lugar=document.getElementById("todo");
    producto.classList.add("hola");
    const nuevo=`
    <div class="card-productos">
    <img src="${url}" class="imagen-producto" alt="">
    <h3 class="nombre-producto">${nombre}</h3>
    <p class="precio-producto">$${precio}</p>
    <a href="../screens/detalle_producto.html?id=${id}" class="ver-producto">Ver producto</a>
</div>`
    producto.innerHTML=nuevo;
    lugar.appendChild(producto);
}


ProductServices.ListaProductos().then((data)=>{
    data.forEach((producto) => {
        crearProducto(producto.url,producto.nombre,producto.precio,producto.id);
    });
})