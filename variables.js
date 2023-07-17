let productos;
obtenerJsonProds()
console.table(productos);
let carro = JSON.parse(localStorage.getItem('carro')) || [0];
let tablaBody = document.getElementById('tablabody');
let contenedorProds = document.getElementById('misprods');
let finalizarBtn = document.getElementById("finalizar");
let vaciarBtn = document.getElementById("vaciar");



function filtrarPorPrecio(precio){
    const filtrados = productos.filter((prod)=>prod.precio <= precio);
    return filtrados;
}


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


console.log(document.body);
console.dir(document.body);
/*estilo*/
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
    Swal.fire({
      title: 'Excelente !',
      text: `Agregaste ${producto.nombre} al carrito !`,
      imageUrl: producto.foto,
      imageWidth: 100,
      imageHeight: 150,
      imageAlt: producto.nombre,
    });
    tablaBody.innerHTML += `
      <tr>
        <td>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
      </tr>
    `;

    
/*suma total de los productos agregados*/
  let totalCarrito = carro.reduce((acumulador,producto)=>acumulador+producto.precio,0);
  console.log(totalCarrito);
  document.getElementById('total').innerText = 'Total a pagar $: '+totalCarrito;
/*storage*/
  localStorage.setItem('carro',JSON.stringify(carro));

}



//
for (let i = 0; i < localStorage.length; i++) {
   let clave = localStorage.key(i);
   console.log("Clave: "+ clave);
   console.log("Valor: "+ localStorage.getItem(clave));
}

/almacenar los productos por json/

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

guardarLocal("listaProductos", JSON.stringify(productos));
 

class Producto {
  constructor(obj) {
    this.nombre = obj.nombre.toUpperCase();
    this.precio = parseFloat(obj.precio);
  }
  sumaIva() {
    this.precio = this.precio * 1.21;
  }
}

/*finalizar carrito*/
finalizarBtn.onclick=()=>{
  carro=[];
  document.getElementById('tablabody').innerHTML='';
  document.getElementById('total').innerText = 'Total a pagar $:';
  swal.fire('Haz pagado el total del carrito','Gracias por tu compra','success');
  localStorage.removeItem("carro");
}

 

/*vaciar carrito*/
vaciarBtn.onclick=()=>{
  carro=[];
  document.getElementById('tablabody').innerHTML='';
  document.getElementById('total').innerText = 'Total a pagar $:';
  swal.fire('se ha vaciado carro','Vuelve a empezar','success');
  localStorage.removeItem("carro");
} 

//JSON
async function obtenerJsonProds(){
  const URLJSON = '/productos.json';
  const respuesta = await fetch(URLJSON);
  const data = await respuesta.json();
  console.log(data);
  productos = data;
  renderizarProductos(productos);
}
  









