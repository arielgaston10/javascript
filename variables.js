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

















