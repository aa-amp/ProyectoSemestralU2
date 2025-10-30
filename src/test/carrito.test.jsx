import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { CarritoProvider } from '../contexto/CarritoContexto';
import Carrito from '../paginas/Carrito';
import productos from '../utils/productos';

describe('Suite de pruebas del carrito de compras', () => {

  it('deberia renderizar los items del carrito bien', () => {
    const itemsIniciales = [
      { ...productos[0], cantidad: 2 },
      { ...productos[1], cantidad: 1 }
    ];

    render(
      <MemoryRouter>
        <CarritoProvider initialCarrito={itemsIniciales}>
          <Carrito />
        </CarritoProvider>
      </MemoryRouter>
    );

    expect(screen.getByText(productos[0].title)).toBeInTheDocument();
    expect(screen.getByText(productos[1].title)).toBeInTheDocument();

    expect(screen.getByText(/Cantidad:\s*2/i)).toBeInTheDocument();
    expect(screen.getByText(/Cantidad:\s*1/i)).toBeInTheDocument();
  });

  it('deberia vaciar el carrito al hacer clic en “Vaciar carrito”', () => {
    const itemsIniciales = [
      { ...productos[0], cantidad: 2 },
      { ...productos[1], cantidad: 1 }
    ];

    render(
      <MemoryRouter>
        <CarritoProvider initialCarrito={itemsIniciales}>
          <Carrito />
        </CarritoProvider>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button', { name: /vaciar carrito/i }));

    expect(screen.queryByText(productos[0].title)).not.toBeInTheDocument();
    expect(screen.queryByText(productos[1].title)).not.toBeInTheDocument();
    expect(screen.getByText(/Carrito Vaciado/i)).toBeInTheDocument();
  });

  it('deberia eliminar un producto al hacer clic en “-”', () => {
    const itemsIniciales = [
      { ...productos[0], cantidad: 1 },
      { ...productos[1], cantidad: 1 }
    ];

    render(
      <MemoryRouter>
        <CarritoProvider initialCarrito={itemsIniciales}>
          <Carrito />
        </CarritoProvider>
      </MemoryRouter>
    );

    expect(screen.getByText(productos[0].title)).toBeInTheDocument();
    expect(screen.getByText(productos[1].title)).toBeInTheDocument();

    // Clic en botón "-" del primer producto
    const btnMenos = screen.getAllByText('-')[0];
    fireEvent.click(btnMenos);

    expect(screen.queryByText(productos[0].title)).not.toBeInTheDocument();
    expect(screen.getByText(productos[1].title)).toBeInTheDocument();
  });

  it('deberia actualizar el precio total cuando la cantidad cambie', () => {
    const itemsIniciales = [
      { ...productos[0], cantidad: 1 },
    ];

    render(
      <MemoryRouter>
        <CarritoProvider initialCarrito={itemsIniciales}>
          <Carrito />
        </CarritoProvider>
      </MemoryRouter>
    );

    // Incrementa la cantidad a 3
    const botonMas = screen.getByText('+');
    fireEvent.click(botonMas);
    fireEvent.click(botonMas);

    // Verifica cantidad 3
    expect(screen.getByText(/Cantidad:\s*3/i)).toBeInTheDocument();

    // Verifica total
    const precioUnitario = parseInt(productos[0].price.replace(/\D/g, ""));
    const totalEsperado = precioUnitario * 3;
    expect(screen.getByText(new RegExp(`Total:\\s*\\$?${totalEsperado}`, 'i'))).toBeInTheDocument();
  });

});
