import { initializeApp } from "firebase/app";
import {collection, getFirestore, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "proyectofinal-froidevaux.firebaseapp.com",
  projectId: "proyectofinal-froidevaux",
  storageBucket: "proyectofinal-froidevaux.appspot.com",
  messagingSenderId: "627267227569",
  appId: "1:627267227569:web:f21a06cb3df80e7c523790"
};

const app = initializeApp(firebaseConfig);

const db= getFirestore()

const cargarBDD = async () => {
  const promise = await fetch('./json/productos.json')
  const productos = await promise.json()
  productos.forEach(async (prod) => {
      await addDoc(collection(db, "productos"), {
          id: prod.id,
          idCategoria: prod.idCategoria,
          nombre: prod.nombre,
          contenido: prod.contenido, 
          precio: prod.precio,
          stock: prod.stock,
          img: prod.img
      })
  })
}

const getProductos = async() => {
  const productos = await getDocs(collection(db, "productos"))
  const items = productos.docs.map(prod => {return {...prod.data(), id: prod.id}})
  return items
}

const getProducto = async(id) =>{
  const prod = await getDoc(doc(db, "productos", id))
  const item = {...prod.data(), id: prod.id}
  return item
}

const createProducto = async (objProducto) => {
  const estado = await addDoc(collection(db, "productos"), {
    id: objProducto.id,
    idCategoria: objProducto.idCategoria,
    nombre: objProducto.nombre,
    contenido: objProducto.contenido, 
    precio: objProducto.precio,
    stock: objProducto.stock,
    img: objProducto.img
  })

  return estado
}

const updateProducto = async(id, info) => {
  const estado = await updateDoc(doc(db, "productos",id), info)
  return estado
}

const deleteProducto = async(id) => {
  const estado = await deleteDoc(doc(db,"productos", id))
  return estado
}

const createOrdenCompra = async (cliente, preTotal, fecha) => {
  const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
      nombre: cliente.nombre,
      apellido: cliente.apellido,
      email: cliente.email,
      dni: cliente.dni,
      direccion: cliente.direccion,
      fecha: fecha,
      precioTotal: preTotal
  })

  return ordenCompra
}

const getOrdenCompra = async(id) => {
  const item = await getDoc(doc(db, "ordenCompra", id))
  const ordenCompra = {...item.data(), id: item.id}
  return ordenCompra
}



export {cargarBDD, getProductos, getProducto, createProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra}

