const producto = [
    {
        id:1,
        tipo:'bolsa',
        nombre:'Bolso Playero Slappy DIY',
        material:'hilo',
        precio:750,
    },
    {
        id:2,
        tipo:'cera',
        nombre:'Vela/Wax Slappy DIY',
        material:'cera',
        precio:200,
    },
    {
        id:3,
        tipo:'campera',
        nombre:'Campera Bomber Slappy DIY',
        material:'hilo',
        precio:350,
    },
    {
        id:4,
        tipo:'bolsa',
        nombre:'Bolsas Slappy Logo',
        material:'algodon',
        precio:850,
    },
    {
        id:5,
        tipo:'remera',
        nombre:'Remera Slappy DIY x Persistir',
        material:'algodon',
        precio:900,
    },
    {   
        id:6,
        tipo:'bolso',
        nombre:'Bolsos Eje x Slappy DIY',
        material:'hilo',
        precio:180,
    },
    {   
        id:7,
        tipo:'medias',
        nombre:'Medias Slappy Logo',
        material:'algodon',
        precio:400,
    },
    {
        id:8,
        tipo:'skate',
        nombre:'Varillas de Skate Slappy',
        material:'plastico',
        precio:400,
    },			 				
    ];
    

function Cliente(nombre,apellido,telefono,direccion,codPostal){
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = parseInt(telefono);
    this.direccion = direccion;
    this.codPostal = parseInt(codPostal);
}

function Articulo(id,tipo, nombre, material, precio){
    this.id = id;
    this.tipo = tipo;
    this.nombre = nombre;
    this.material = material;
    this.precio = precio;
}

function Compra() {
    this.cliente = undefined;
    this.items = [];
    this.total = 0;
    var fecha = new Date();
    fecha = fecha.getDate() + "/" + fecha.getMonth() + "" + fecha.getFullYear();
    this.fecha 

};
const item = [];
const agregarAlCarro = () => {
        $(`#agregarAlCarro${producto.id}`).on('click', function nuevoProducto () {    
        item.push(producto.id); 
        console.log(item);
        });  
}
agregarAlCarro (item);



/*
$("#agregarAlCarro").click(function (productos) {
const nuevoCompra = new Compra (cliente,productos,total);
productos.push(nuevoProducto);

});


const cliente = document.getElementById("datos");
cliente.addEventListener("submit", validarCompra);

const listaClientes = [];

function validarCompra(evento){
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const telefono = parseInt(document.getElementById("telefono").value);
    const direccion = document.getElementById("direccion").value;
    const codPostal = parseInt(document.getElementById("codPostal").value);

    const nuevoCliente = new Compra (cliente);
    listaClientes.push(nuevoCliente);

    const section = document.querySelector (".contenedor");
    const form = document.createElement("form");
    const div = document.createElement("div");


form.innerHTML = 
    `<form class="contenedor">
    <div class="form-group">
      <label for="formGroupExampleInput">Nombre</label>
      <input id="nombre" type="text" class="form-control" id="formGroupExampleInput">
    </div>
    <div class="form-group">
      <label for="formGroupExampleInput2">Apellido</label>
      <input id="apellido" type="text" class="form-control" id="formGroupExampleInput2">
    </div>
    <div class="form-group">
        <label for="formGroupExampleInput2">Telefono</label>
        <input id="telefono" type="text" class="form-control" id="formGroupExampleInput2">
    </div>
    <div class="form-group">
        <label for="formGroupExampleInput2">Direccion (incluir entrecalles)</label>
        <input id="direccion" type="text" class="form-control" id="formGroupExampleInput2">
    </div>
    <div class="form-group">
        <label for="formGroupExampleInput2">Codigo Postal</label>
        <input id="codPostal" type="text" class="form-control" id="formGroupExampleInput2">
    </div>
    <button type="button" class="btn8 btn btn-outline-warning">Comprar</button>
</form>`;

form.appendChild(div);
section.appendChild(form);

agregarListener(nuevoCliente);
}

const agregarListener = (nuevoCliente) =>{
    const button = btnCompra = document.getElementById('btnCompra');
    nuevoCliente.nuevaCompra ();
    button.addEventListener ("click", () =>{
    console.log(nuevoCliente);    
    });
} */