/*Condicional*/
const mayorDeEdad = prompt("Ingrese su edad por favor");
if (mayorDeEdad >= 18) {
  alert("acceso aprobado");
} else {
  alert("Debe ser mayor de edad para ingresar");
}
/*ciclo*/
let nombresInquilinos = prompt(
  "ingrese nombre de una de las personas que va a alquilar, o escriba SALIR"
);
while (nombresInquilinos != "SALIR") {
  alert("El nombre del inquilino es " + nombresInquilinos);
  nombresInquilinos = prompt(
    "ingrese nombre de una de las personas que va a alquilar, o escriba SALIR"
  );
}
if ((nombresInquilinos = " ")) {
  alert(" no puede dejar vacio el estacio, escriba SALIR");
}

const porcentajeComision = 0.2;
const valorInmuebleAlquiler = prompt("ingrese valor del alquiler");
const valorConComision = valorInmuebleAlquiler * porcentajeComision;
alert("pagara: " + valorConComision);

const calcularAlquiler = function (precioAlquiler) {
  if (precioAlquiler < 4 || precioAlquiler > 3) {
    return 600;
  } else if (precioAlquiler < 3 || precioAlquiler > 2) {
    return 500;
  } else if (precioAlquiler < 2 || precioAlquiler > 1) {
    return 400;
  }
  return 200;
};

/*Objeto constructor*/
function propiedadEnAlquiler(direccion, ambientes, precio) {
  this.direccion = direccion;
  this.ambientes = ambientes;
  this.precio = precio;
}

const propiedadEnAlquiler1 = new propiedadEnAlquiler(
  "Av.Libertador 6299 depto 815",
  2,
  1500
);
