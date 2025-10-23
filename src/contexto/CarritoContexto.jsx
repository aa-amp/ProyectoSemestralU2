import React, { createContext, useContext, useState } from "react";

const CarritoContexto = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto) => {
    setCarrito(prev => [...prev, producto]);
  };

  const eliminarProducto = (id) => {
    setCarrito(prev => prev.filter(p => p.id !== id));
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