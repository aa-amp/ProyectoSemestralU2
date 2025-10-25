import React, { createContext, useContext, useState } from "react";

const CarritoContexto = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto) => {
    setCarrito((prevCarrito) => {
      const index = prevCarrito.findIndex(p => p.id === producto.id);
      if (index !== -1) {
        const nuevoCarrito = [...prevCarrito];
        nuevoCarrito[index].cantidad += 1;
        return nuevoCarrito;
      } else {
        return [...prevCarrito, { ...producto, cantidad: 1 }];
      }
    });
  };

  const eliminarProducto = (id) => {
    setCarrito((prevCarrito) => {
      const index = prevCarrito.findIndex(p => p.id === id);
      if (index !== -1) {
        const nuevoCarrito = [...prevCarrito];
        if (nuevoCarrito[index].cantidad > 1) {
          nuevoCarrito[index].cantidad -= 1;
          return nuevoCarrito;
        } else {
          return nuevoCarrito.filter(p => p.id !== id);
        }
      }
      return prevCarrito;
    });
  };

  const eliminarTodoProducto = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter(p => p.id !== id));
  };

  const vaciarCarrito = () => setCarrito([]);

  return (
    <CarritoContexto.Provider value={{ carrito, agregarProducto, eliminarProducto, eliminarTodoProducto, vaciarCarrito }}>
      {children}
    </CarritoContexto.Provider>
  );
}

export function useCarrito() {
  return useContext(CarritoContexto);
}
