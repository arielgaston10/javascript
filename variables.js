console.table(productos);
const carro = [];

function filtrarPorPrecio(precio){
    const filtrados = productos.filter((prod)=>prod.precio <= precio);
    return filtrados;
}


let contenedorProds = document.getElementById('misprods');
let tablaBody = document.getElementById('tablabody');

/*se utiliza dom*/
function renderizarProductos(listaProds){
    for(const prod of listaProds){
        contenedorProds.innerHTML+=`
        <div class="card col-md-2">
  <img class="card-img-top" src="${prod.foto}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${prod.nombre}</h5>
    <p class="card-text">$ ${prod.precio}</p>
    <button id=${prod.id} class="btn btn-primary compra">Comprar</button>
  </div>
</div>
        `;
    }
    /*evento */
    let botones = document.getElementsByClassName('compra');
    for(const boton of botones){
     boton.addEventListener('click',()=>{
        const prodACarro = productos.find((producto) => producto.id == boton.id);
        console.log(prodACarro);

        agregarACarrito(prodACarro);
    })

    /*evento del mouseover*/
    boton.onmouseover = () => {
      boton.classList.replace('btn-primary','btn-warning');
    }

    boton.onmouseout = () => {
      boton.classList.replace('btn-warning','btn-primary');
    }
  }
}

renderizarProductos(productos);

console.log(document.body);
console.dir(document.body);

let navegador = document.getElementById('navegador');
console.log(navegador);
console.log(navegador.innerHTML);
navegador.style.body='#3EFF99';

let titulo = document.getElementById('titulo');
titulo.style.font='bold 35px monospace';

let parrafos = document.getElementsByTagName('p');
console.log(parrafos);
parrafos[0].innerText = new Date().toLocaleDateString();


/*agregando productos*/
function agregarACarrito(producto){
    carro.push(producto);
    console.table(carro);
    tablaBody.innerHTML += `
      <tr>
        <td>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
      </tr>
    `;

/*suma total de los productos agregados*/
  let totalCarrito = carro.reduce((acumulador,producto)=>acumulador+producto.precio,0);

  document.getElementById('total').innerText = 'Total a pagar $: '+totalCarrito;

}


for (let i = 0; i < localStorage.length; i++) {
   let clave = localStorage.key(i);
   console.log("Clave: "+ clave);
   console.log("Valor: "+ localStorage.getItem(clave));
}

/almacenar los productos por json/

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
/*almacenamiento por producto*/
for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto));
}
 

class Producto {
  constructor(obj) {
    this.nombre = obj.nombre.toUpperCase();
    this.precio = parseFloat(obj.precio);
  }
  sumaIva() {
    this.precio = this.precio * 1.21;
  }
}
/*se obtiene los productos almacenados*/
const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
const productos2 = [];


for (const objeto of almacenados)
  productos2.push(new Producto(objeto));

 for (const producto of productos2)
  producto.sumaIva();

 console.table(productos2); 

 
  









