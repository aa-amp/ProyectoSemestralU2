import React, { createContext, useContext, useState } from "react";

const CarritoContexto = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto) => {
    setCarrito((prevCarrito) => {
      const existente = prevCarrito.find(p => p.id === producto.id);
      if (existente) {
        return prevCarrito.map(p =>
          p.id === producto.id
            ? { ...p, cantidad: p.cantidad + 1 }
            : p
        );
      } else {
        return [...prevCarrito, { ...producto, cantidad: 1 }];
      }
    });
  };

  const eliminarProducto = (id) => {
    setCarrito((prevCarrito) =>
      prevCarrito
        .map(p =>
          p.id === id ? { ...p, cantidad: p.cantidad - 1 } : p
        )
        .filter(p => p.cantidad > 0)
    );
  };

  const vaciarCarrito = () => setCarrito([]);

  return (
    <CarritoContexto.Provider value={{ carrito, agregarProducto, eliminarProducto, vaciarCarrito }}>
      {children}
    </CarritoContexto.Provider>
  );
}

export function useCarrito() {
  return useContext(CarritoContexto);
}
