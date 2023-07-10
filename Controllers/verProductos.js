import { ProductServices } from "../services/producto-service.js";

const crearProducto=(url,nombre,categoria,precio,id)=>{
    const producto=document.createElement("div");
    let lugar=document.getElementById(`${categoria}`);
    producto.classList.add("hola");
    const nuevo=`
    <div class="card-productos">
    <img src="${url}" class="imagen-producto" alt="">
    <h3 class="nombre-producto">${nombre}</h3>
    <p class="precio-producto">$${precio}</p>
    <a href="screens/detalle_producto.html?id=${id}" class="ver-producto">Ver producto</a>
</div>`
    producto.innerHTML=nuevo;
    lugar.appendChild(producto);
}


ProductServices.ListaProductos().then((data)=>{
    let diversos=0;
    let consolas=0;
    let computadoras=0;
    data.forEach((data1) => {
        switch(data1.categoria){
            case 'Consolas':
                if(consolas<6){
                    crearProducto(data1.url,data1.nombre,data1.categoria,data1.precio,data1.id);
                    consolas++;
                }
                break
            case 'Computadoras':
                if(computadoras<6){
                    crearProducto(data1.url,data1.nombre,data1.categoria,data1.precio,data1.id);
                    computadoras++;
                }
                break;
            case 'Diversos':
                if(diversos<6){
                    crearProducto(data1.url,data1.nombre,data1.categoria,data1.precio,data1.id);
                    diversos++;
  
                }
                break;
        }
    });
})
