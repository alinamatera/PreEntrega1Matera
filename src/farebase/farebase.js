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
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {

        await addDoc(collection(bdd, "productos"), {
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })
}