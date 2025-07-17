import {PI, IVA,DESCUENTO} from "./constantes.js";
import {ROLES} from "./usuariosConstantes.js";
import { crearUsuario, esAdmin } from "./usuarios.js";
 //!Punto 2

export function sumar(a, b){
    let suma = a + b;
    return suma; 
}
export function restar(a, b){
    let resta = a - b;
     return resta;
}
export function multiplicar(a, b){
    let multi = a * b;
     return multi
}
export function areaCirculo(radio){
    let area = (radio * radio) * PI;
     return area;
 }
//!Punto 3

export function calcularTotal(precio, cantidad){
    let total = precio * cantidad;
    return total;

}
export function aplicarImpuesto(total){
    let impuesto = IVA * total;
    let total1 = total +  impuesto;
    return total1;
}
export function aplicarDescuento(total){
    let descuento = DESCUENTO * total;
    let total2 = total - descuento;
    return total2;
}
 //!Punto 5

 export function aplicarDescuentoPorRol(total, usuario){
    if (usuario.rol == ROLES.ADMIN){
        let descuento = total * 0.20;
        return total - descuento;
    }else{
        let descuento = total * DESCUENTO;
        return total - descuento;
    }
    
 }







//para el 4 punto new Date(),toLocalDateString("es-CO"), para el 