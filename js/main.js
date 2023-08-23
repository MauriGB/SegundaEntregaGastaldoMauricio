const cereal = [{
    codigo : 1,
    transporte : 'soja',
    precio : 3000
},{
    codigo : 2,
    transporte : 'maiz',
    precio : 2500
},{
    codigo : 3,
    transporte : 'trigo',
    precio : 2300
}];

const ganado = [{
    codigo : 4 ,
    transporte : 'vacas',
    precio : 2800
},{
    codigo : 5 ,
    transporte : 'cerdos',
    precio : 2200
},{
    codigo : 6 ,
    transporte : 'obejas',
    precio : 2000
}];

const flete = [{
    codigo : 7 ,
    transporte : 'varios',
    precio : 2000
}];

function lista(){
    const listaGanado = ganado.map((el)=>{
        return `${el.transporte} $${el.precio} por km\n`
    }),
    listaCereal = cereal.map((el)=>{
        return `${el.transporte} $${el.precio} por km\n`
    }),
    listaFlete = flete.map((el)=>{
        return `${el.transporte} $${el.precio} por km\n`
    });
    return `Cereales: \n${listaCereal}\nGanado: \n${listaGanado}\n Flete \n${listaFlete}`
};

function buscarTransporte(){
    
    const transporteEncontrado = buscarViaje(unirArrays(),prompt('Ingrese su busqueda'))
    if (transporteEncontrado !== undefined){
        return `Hay viaje de ${transporteEncontrado.transporte} con un precio de $${transporteEncontrado.precio} por kilometro`
    } else {
        alert('no hay coincidencias, vuelva a intentarlo');
        return buscarTransporte()
    }

}
function buscarTransportePrecio(){
    
    const transporteEncontrado2 = buscarViaje(unirArrays(),prompt('Ingrese su busqueda'))
    if (transporteEncontrado2 !== undefined){
        let precioFinal = transporteEncontrado2.precio * parseInt(prompt('Cuantos kilometros va a recorrer?'))
        return `El viaje tiene un costo de $${precioFinal}`
    } else {
        alert('no hay coincidencias, vuelva a intentarlo');
        return buscarTransporte()
    }

}

function buscarViaje(arr,filtro){
    const encontrado = arr.find((el) => el.transporte.includes(filtro));
    return encontrado
}

function unirArrays (){
    preArray = cereal.concat(ganado)
    todosJuntos = preArray.concat(flete)
    return todosJuntos
}

function mostrarMenu() {
    const menu = 'Bienvenido a la segunda pre entrega! \n 1- Listado. \n 2- Buscar viaje disponible. \n 3- Calcular Viaje. \n 0- Salir.';
    alert(menu)
    
  }

let encendido = true;

while (encendido) {
    mostrarMenu();
    const opcion = prompt("Selecciona una opción:");
  
    if (opcion === "1") {
      alert(lista());

    } else if (opcion === "2") {
      alert(buscarTransporte());

    } else if (opcion === "3") {
      alert("Que quiere transportar?");
      let cuenta = buscarTransportePrecio()
      alert(cuenta);


    } else if (opcion === "0") {
      alert("Gracias vuelvan prontos");
      encendido = false;

    } else {
      alert("Opción no válida. Por favor, selecciona una opción del menú.");
      
    }
  }



