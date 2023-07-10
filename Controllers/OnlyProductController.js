import { ProductServices } from "../services/producto-service.js";

const obtenerInformacion= async()=>{
    const url=new URL(window.location);
    const id=url.searchParams.get("id");

    if(id===null){
        console.log("Ocurrio un error");
        window.location.href="../screens/index.html";
    }

    const imagen=document.getElementById("imagen");
    const titulo=document.getElementById("titulo_producto");
    const precio=document.getElementById("precio_producto");
    const texto=document.getElementById("informacion-producto");

    try {
        const producto=await ProductServices.DetalleProducto(id);
        
        if(producto){
            titulo.textContent=producto.nombre;
            precio.textContent="$"+producto.precio;
            texto.textContent=producto.descripcion;
            imagen.src=producto.url;
        }else{
            throw new Error();
        }

    } catch (error) {
        console.log("Ocurrió un error")
        window.location.href="../screens/index.html"
    }
}

const crearProducto=(url,nombre,precio,id)=>{
    const producto=document.createElement("div");
    let lugar=document.getElementById("contenedor");
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

const CrearRelacionados= async()=>{
    let cont=0;
    const url=new URL(window.location);
    const id=url.searchParams.get("id");
    const producto=await ProductServices.DetalleProducto(id);
    try {
        if(producto){
            const productos=await ProductServices.Similares(producto.categoria);
            productos.forEach( (elemento) => {
                if(elemento.id!=id && cont<6){
                    crearProducto(elemento.url,elemento.nombre,elemento.precio,elemento.id);
                    cont++;
                }
            });
        }else{
            throw new Error();
        }
    } catch (error) {
        console.log("Ocurrió un error")
        window.location.href="../index.html";
    }
}

obtenerInformacion();
CrearRelacionados();