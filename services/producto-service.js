const GuardarProducto=(url,nombre,categoria,precio,descripcion)=>{
    return fetch("https://json-service-ecommerce.onrender.com/productos",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            url,
            nombre,
            categoria,
            precio,
            descripcion,
            id:uuid.v4()
        })
    })
}

const ListaProductos=()=>{
    return fetch("https://json-service-ecommerce.onrender.com/productos").then(respuesta=>respuesta.json());
}


const EliminarProducto=(id)=>{
    return fetch(`https://json-service-ecommerce.onrender.com/productos/${id}`,{
        method:"DELETE"
    })
}

const DetalleProducto=(id)=>{
    return fetch(`https://json-service-ecommerce.onrender.com/productos/${id}`).then(respuesta=>respuesta.json());
}

const Similares=(categoria)=>{
    return fetch(`https://json-service-ecommerce.onrender.com/productos?q=${categoria}`).then(respuesta=>respuesta.json());
}

const ActualizarProducto=(url,nombre,categoria,precio,descripcion,id)=>{
    return fetch(`https://json-service-ecommerce.onrender.com/productos/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            url,
            nombre,
            categoria,
            precio,
            descripcion
        })
    })
}

export const ProductServices={
    GuardarProducto,
    ListaProductos,
    EliminarProducto,
    DetalleProducto,
    ActualizarProducto,
    Similares,
}