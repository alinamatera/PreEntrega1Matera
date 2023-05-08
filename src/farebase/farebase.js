import { initializeApp } from "firebase/app";

import { getFirestore, addDoc, getDoc, getDocs, deleteDoc, updateDoc, collection, doc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCeUWumG0WQ21gZX8i5TU-_P8387h9jQLk",
  authDomain: "proyectofinal-matera.firebaseapp.com",
  projectId: "proyectofinal-matera",
  storageBucket: "proyectofinal-matera.appspot.com",
  messagingSenderId: "498898864309",
  appId: "1:498898864309:web:95897d43f09dc889fbd6fc"
};

const app = initializeApp(firebaseConfig);

const bdd = getFirestore(app)

export const createProducts = async () => {
    const promise = await fetch("/json/productos.json");
    const productos = await promise.json();
    const promises = productos.map((prod) => {
      return addDoc(collection(bdd, "productos"), {
        nombre: prod.nombre,
        marca: prod.marca,
        idCategoria: prod.idCategoria,
        stock: prod.stock,
        precio: prod.precio,
        img: prod.img,
      });
    });
    await Promise.all(promises);
    console.log("Productos creados correctamente");
  };

export const getProducts = async() => {
    const prods = await getDocs (collection(bdd, "productos"))
    const items = prods.docs.map(prod => {
        return{...prod.data(), id: prod.id}
    })
    return items
}
export const getProduct = async(id) => {
    const prod = await getDoc(doc(bdd,"productos",id))
    const item = {...prod.data(), id: prod.id}
    return item
}

export const updateProduct = async(id, info) => {
    await updateDoc(doc(bdd, "productos", id), info)
}

export const deleteProduct = async(id) => {
    await deleteDoc(doc(bdd,"productos", id))
}

export const createOrdenCompra = async(cliente, precioTotal, carrito, fecha) => {
    const ordenCompra = await addDoc(collection(bdd, "ordenCompra"), {
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async(id) => {
    const ordenCompra = await getDoc(doc(bdd,"ordenCompra", id))
    const item = {...ordenCompra.data(), id: ordenCompra.id}
    return item
}