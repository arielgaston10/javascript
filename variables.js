/*variable para ingresar el nombre*/
let nombre=prompt('Ingresar tu nombre');

while(nombre == '') {alert ('Nombre invalido');
nombre = prompt('Ingresar tu nombre');
}
alert ('Bienvenido/a '+nombre);

console.table(productos);

function filtrarPorPrecio(precio){
    const filtrados = productos.filter((prod)=>prod.precio <= precio);
    return filtrados;
}
/* codigos de entrada */
let preciomax = parseFloat(prompt('Ingresa el dinero max que puedas abonar 0-para salir'));
while(preciomax != 0 ){
    if(isNaN(preciomax) || preciomax < 0){
        alert('Error. Ingrese un numero valido');
    }else{
        const prodsFiltrados = filtrarPorPrecio(preciomax);
        console.table(prodsFiltrados);
    }
    preciomax = parseFloat(prompt('Ingrese el dinero max que puedas abonar 0-para salir'));
}

















/*  primera preentrega convertido en comentario  */
/*variable para ingresar el nombre
let nombre=prompt('Ingresar tu nombre');

while(nombre == '') {alert ('Nombre invalido');
nombre = prompt('Ingresar tu nombre');
}
alert ('Bienvenido/a '+nombre);

let pregunta = prompt('Desea comprar un producto ? (s-si)');
let total = 0;
while(pregunta.toLowerCase() == 's'){
let producto = prompt('1 - Royal Canin Medium Adult 15kg $11799\n2- Pro Plan Adulto Razas Medianas 15kg $18559\n3 - Purina Excellent Adult Maintenance Formula 20kg $24225');
/*condicional switch para la evaluacion del producto*/
/*switch(producto){
    case '1':
        alert('Agregaste Royal Canin Medium Adult 15kg $11799 a tu carro ');
        incrementarTotal(11799);
        break;
    case '2':
        alert('Agregaste Pro Plan Adulto Razas Medianas 15kg $18559 a tu carro ');
        incrementarTotal(18559);
        break;
    case '3':
        alert('Agregaste Purina Excellent Adult Maintenance Formula 20kg $24225 a tu carro ');
        incrementarTotal(24225);
        break;
    default:
        alert('Codigo erroneo');
        break;            
                        
} 


pregunta = prompt('Desea comprar otro producto ? (s-si)');
}
alert('Monto total de su compra $'+total);

/*funcion para calcularel total*/

/*function incrementarTotal(precio){
total = total + precio;
alert('Subtotal hasta el momento $'+total);
}*/
