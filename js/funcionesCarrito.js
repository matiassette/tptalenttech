import {
    guardarCarrito,
    obtenerCarrito,
    // vaciarCarrito,
    vaciarCarritoStorage,
} from "./storage.js"; 

import { actualizarContador, mostrarMensaje } from "./ui.js";

export const agregarAlCarrito = (producto) => {
    //usamos la funcion que pide el carrtio al localstorage
    const carrito = obtenerCarrito();
    carrito.push(producto);

    //usamos la funcion que guarda el carrtio en localstorage
    guardarCarrito(carrito);

    //usamos la funcion ui que actualiza en numero en carrito
    actualizarContador(carrito);
    mostrarMensaje("producto agregado🎉")
};

export const eliminarProducto = (indice) => {
    const carrtio = obtenerCarrito()
    carrtio.splice(indice, 1);

    //actualizamos el carrito en el localstorge
    guardarCarrito(carrtio);

    //actualizamos el contador 
    actualizarContador(carrtio);
    mostrarMensaje("producto eliminado✅");
};

export const vaciarCarrito = () => {
    vaciarCarritoStorage();
    actualizarContador([]);
    mostrarMensaje("carrito vaciado");
};