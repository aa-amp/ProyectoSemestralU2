import { validarRut, validarCorreo, limpiarRut } from '../utils/validaciones'

describe('Validaciones utils', () => {
    it('limpiarRut elimina puntos y guiones', () => {
        expect(limpiarRut('20.325.959-k')).toBe('20325959K')
    })

    it('validarRut retorna true para un RUT valido',()=> {
        expect(validarRut('20.325.959-k')).toBe(true)
    })

    it('validarCorreo acepta solo @duocuc.cl', () =>{
        expect(validarCorreo("usuario@duocuc.cl")).toBe(true)
        expect(validarCorreo("usuario@gmail.com")).toBe(false)
    })
})