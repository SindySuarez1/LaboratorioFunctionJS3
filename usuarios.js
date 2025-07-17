//!Punto 4
import { ROLES } from "./usuariosConstantes.js"

export function crearUsuario(nombre, rol){
    return{
        nombre: nombre,
        rol : rol,
        fechaRegistro : new Date().toLocaleDateString("es-CO")
    }
}
export function esAdmin(usuario){
    return usuario.rol == ROLES.ADMIN;
}