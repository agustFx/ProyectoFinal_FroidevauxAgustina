import { createProducto, getProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra } from "./firebase";

/* const producto = {
    "id": 1,
    "idCategoria": 1, 
    "nombre": "Pizza Extra Cheese",
    "contenido": "Cuatro quesos, peperoni, morrón, aceitunas",
    "precio": 1700,
    "stock": 28,
    "img": "https://firebasestorage.googleapis.com/v0/b/proyectofinal-froidevaux.appspot.com/o/pizzaink.jpg?alt=media&token=d70f7593-c667-4f36-b345-57918c4e761d"
}

// "Shsz5E8Dt6dr2u0cVNll"
//createProducto(producto).then(mensaje => console.log(mensaje))

getProducto("Shsz5E8Dt6dr2u0cVNll").then(prod => {
    prod.stock -= 10
    updateProducto("Shsz5E8Dt6dr2u0cVNll", prod).then(mensaje => console.log(mensaje))
}) */
 

const cliente = {
    nombre: "Pedro",
    apellido: "Parker",
    email: "pedrito@parker.com",
    dni: 123123,
    direccion: "Calle Falsa 123"
}

// createOrdenCompra(cliente, 12500, Date.now()).then(orden => console.log(orden))

getOrdenCompra("dWu4eR7IQfibCgCeQ34D").then(orden => console.log(orden))




