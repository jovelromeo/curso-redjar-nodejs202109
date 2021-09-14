// const constante = "hola const";
// let variableLet = "hola let";

// variableLet = "modificada";

// console.log('La constante es:', constante);
// console.log('La variable es:', variableLet);

// const valor = null;
// if (valor) {
//     console.log('El valor es truthy');
// } else {
//     console.log('El valor es falsy');
// }

// let array1 = [{ attr: { valor: "VALOR!", fn: () => "Valor de fn" } }];
// console.log(array1 && array1[0] && array1[0].attr && array1[0].attr.fn());
// console.log(array1 && array1[0]?.attr?.fn());

// let valor1 = "Rojo";
// console.log(valor1 || "valor-por-defecto");


let valor1 = "";
let respuesta = (valor1 ? valor1 : "es falsy");
console.log(respuesta);
console.log(valor1 || "es falsy");
