import { render, screen, fireEvent } from '@testing-library/react';
import Registro from '../paginas/Registro';
import { MemoryRouter } from 'react-router-dom';

describe('Registro exitoso', () => {
    it('muestra mensaje de exito si todos los datos son correctos', () => {
        render (<MemoryRouter><Registro /> </MemoryRouter>);
        fireEvent.change(screen.getByPlaceholderText('Nombre'), {target: {value: 'carlos'}});
        fireEvent.change(screen.getByPlaceholderText('Apellido'), {target: {value: 'abarzua'}});
        fireEvent.change(screen.getByPlaceholderText('Correo'), {target: {value: 'c.abarzua@duocuc.cl'}});
        fireEvent.change(screen.getByPlaceholderText('Contraseña'), {target: {value: 'carlos321*'}});
        fireEvent.change(screen.getByPlaceholderText('RUT'), {target: {value: '104920489'}});

        fireEvent.click(screen.getByText('Registrarse'));
        expect(screen.getByText(/Registro exitoso/i)).toBeInTheDocument();
    })
})