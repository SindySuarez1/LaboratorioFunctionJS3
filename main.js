import {PI, IVA, DIAS_SEMANA} from "./constantes.js";
import {sumar, restar, multiplicar, areaCirculo, calcularTotal, aplicarImpuesto, aplicarDescuento} from "./operaciones-matematicas.js";

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

let totalImpuesto1 = aplicarDescuento(totalSinImpuesto);
console.log(totalImpuesto1);