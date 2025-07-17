import {PI, IVA, DIAS_SEMANA} from "./constantes.js";
import {sumar, restar, multiplicar, areaCirculo, calcularTotal, aplicarImpuesto, aplicarDescuento, aplicarDescuentoPorRol} from "./operaciones-matematicas.js";
import { ROLES } from "./usuariosConstantes.js";
import { crearUsuario, esAdmin } from "./usuarios.js";

console.log("\n******************PUNTO 1********************\n"); 

let area = PI * (5*5);
 console.log("El área del circulo es", area)

let precioIva = IVA * 100;
console.log("El precio con iva es", precioIva + 100);

console.log("El día de semana 3 es: ", DIAS_SEMANA[2]);

console.log("\n******************PUNTO 2********************\n");

console.log("El resultado de la suma es:" , sumar(5, 2));
console.log("El resultado de la resta es:" , restar(2, 2));
console.log("El resultado de la multiplicación es:" , multiplicar(2, 2));
console.log("El area del circulo es:" , areaCirculo(5));

console.log("\n******************PUNTO 3********************\n");

let precio = 100;
let cantidad = 3;

let totalSinImpuesto = calcularTotal(precio, cantidad);
console.log("El precio total de",cantidad, "productos es: ", totalSinImpuesto);

let totalImpuesto = aplicarImpuesto(totalSinImpuesto);
console.log("El total con impuesto es: ", totalImpuesto)

let totalDescuento1 = aplicarDescuento(totalSinImpuesto);
console.log("El total con descuento es: ",  totalDescuento1);

console.log("\n******************PUNTO 4********************\n");

let usuario1 = crearUsuario("Pedro", ROLES.ADMIN);
console.log("usuario 1: ", usuario1);

let usuario2 = crearUsuario("Carlos", ROLES.CLIENTE);
console.log("usuario 1: ", usuario2);

console.log("\n******************PUNTO 4********************\n");

console.log("Usuario Admin : ")
let totalSinImpuesto1 = calcularTotal(25, 4);
console.log("El precio total de los productos es: ", totalSinImpuesto1);

let totalImpuesto1 = aplicarImpuesto(totalSinImpuesto1);
console.log("El total con IVA del 19% es: ", totalImpuesto1)

let descuentoRol = aplicarDescuentoPorRol(totalImpuesto1, usuario1);
console.log("El total a pagar menos el descuento del 20% es: ", descuentoRol);

console.log("\n Usuario cliente : \n")

let totalSinImpuesto2 = calcularTotal(25, 3);
console.log("El precio total de los productos es: ", totalSinImpuesto2);

let totalImpuesto2 = aplicarImpuesto(totalSinImpuesto2);
console.log("El total con IVA del 19% es: ", totalImpuesto2)

let descuentoRo2 = aplicarDescuentoPorRol(totalImpuesto2, usuario2);
console.log("El total a pagar menos descuento del 10% es: ", descuentoRol);