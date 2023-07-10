import { ProductServices } from "../services/producto-service.js";

const obtenerProductos = async () => {
  try {
    const productos = await ProductServices.ObtenerProductos();
    return productos;
  } catch (error) {
    console.log("Ocurrió un error al obtener los productos:", error);
    return [];
  }
};


const agregarAlCarrito = (producto) => {
  
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  
  const productoExistente = carrito.find((p) => p.id === producto.id);

  if (productoExistente) {
    
    productoExistente.cantidad++;
  } else {
    
    carrito.push({ ...producto, cantidad: 1 });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));

  
  console.log("Producto agregado al carrito:", producto);
};


const cargarProductosHTML = (productos) => {
  const contenedorProductos = document.getElementById("contenedor-productos");

  productos.forEach((producto) => {
    const productoHTML = `
      <div class="producto">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.precio}</p>
        <button onclick="agregarAlCarrito(${JSON.stringify(producto)})">Agregar al carrito</button>
      </div>
    `;

    contenedorProductos.innerHTML += productoHTML;
  });
};


const inicializarPagina = async () => {

  const productos = await obtenerProductos();

  
  cargarProductosHTML(productos);
};

inicializarPagina();
