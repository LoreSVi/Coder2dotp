const productos =[{ nombre:"cartera", precio:2000},
{nombre:"monedero", precio:250},
{nombre: "mochila", precio: 4000},
{nombre: "labial", precio: 200},
{nombre: "esmalte", precio:230},
{nombre:"collar", precio:160}
];

let carrito = []

let seleccion = prompt("hola desea comprar algún producto si o no")

while (seleccion != "si" && seleccion != "no"){
  alert("por favor ingresa si o no")
  seleccion = prompt("hola desea comprar algo si o no")
}

if (seleccion == "si"){
alert (" a continuación nuestra lista de productos")
let todoslosProductos = producto.map
((producto) => producto.nombre + " " + producto.precio + "$");
alert("gracias por venir, hasta pronto!")
}

while(seleccion != "no"){
  let producto = prompt("agrega un producto a tu carrito")
  let precio = 0
  if(producto == "cartera" || producto == "monedero" || producto == "mochila" || producto == "labial" || producto == "esmalte" || producto == "collar"){
switch (producto) {
  case "cartera":
    precio = 2000;
    break;
          case "monedero":
            precio = 250;
            break;
        case "mochila":
            precio = 4000;
            break;
        case "labial":
        precio = 200;
            break;
        case "esmalte":
           precio = 230;
            break;
        case "collar":
          precio = 160;
          break;
            default:
                break;
 }
let unidades = parseInt(prompt("cuántas unidades quiere llevar"))

carrito.push({producto, unidades, precio})
console.log(carrito)
  } else{
    alert ("no tenemos ese producto")
  }

  seleccion = prompt("desea seguir comprando?")

  while(seleccion === "no"){
    alert("gracias por la compra! hasta pronto")
    carrito.forEach((carritoFinal) => {
      console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
    })
    break;
  }
}

