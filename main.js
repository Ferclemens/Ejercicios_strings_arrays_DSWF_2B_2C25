// Ejercicios de Funciones con Strings y Arrays - DSWF 2B - TPO1
// Clemens Fernando Oscar
//#######################################################################################################
// 1. Calcular el área de un rectángulo
function calcularAreaRectangulo(longitud, ancho) {
  // Calculamos el área del rectángulo
  const area = longitud * ancho;

  return area;
}

console.log("1. Calcular el área de un rectángulo - Resultados:");
console.log(calcularAreaRectangulo(10, 4)); // Resultado: 40
console.log(calcularAreaRectangulo(8, 7)); // Resultado: 56

//#######################################################################################################
//2. Contar palabras en una cadena
function contarPalabras(cadenaDeTexto) {
  // Eliminamos espacios en blanco al inicio y final de la cadena con .trim()
  const cadenaLimpia = cadenaDeTexto.trim();

  // Si la cadena está vacía retornamos 0
  if (cadenaLimpia === "") {
    return "0";
  }

  // Usamos .split(' ') para dividir las palabras en la cadena
  const arrayDePalabras = cadenaLimpia.split(" ");

  // Con length() retornamos la cantidad de palabras separadas (por coma) en el split
  return arrayDePalabras.length;
}

console.log("2. Contar palabras en una cadena - Resultados:");
console.log(contarPalabras("Aguante el IFTS Nº29")); // Resultado: 4
console.log(contarPalabras("Hola")); // Resultado: 1
console.log(contarPalabras("")); // Resultado: 0
console.log(contarPalabras("  solo tres palabras     ")); // Resultado: 3

//#######################################################################################################
// 3. Contar vocales en una cadena
function contarVocales(cadena) {
  let contadorVocales = 0;

  // Convertimos toda la cadena a minúsculas para simplificar la comparación.
  // Solo necesitamos buscar vocales en minúsculas (aeiouáéíóú) en vez de (aeiouáéíóúAEIOUÁÉÍÓÚ).
  let cadenaMinus = cadena.toLowerCase();

  // Vocales a buscar para el conteo
  let vocales = "aeiouáéíóú";

  // Iteramos sobre cada carácter de la cadena en minúsculas.
  for (let i = 0; i < cadenaMinus.length; i++) {
    let caracter = cadenaMinus[i];

    // Verificamos si el carácter evaluado está incluido en nuestro string de 'vocales' con includes()
    // Si es el caso sumamos 1 al contador
    if (vocales.includes(caracter)) {
      contadorVocales++;
    }
  }

  return contadorVocales;
}

console.log("3. Contar vocales en una cadena - Resultados:");
console.log(contarVocales("JavaScript")); // Resultado: 3 (a-a-i)
console.log(contarVocales("Hola Xabi!")); // Resultado: 4 (o-a-a-i)
console.log(contarVocales("IFTS")); // Resultado: 1 (i)

//#######################################################################################################
// 4. Encontrar el palíndromo
function esPalindromo(cadena) {
  //convertimos a minusculas para comparar sin importar mayusculas.
  const cadenaMinus = cadena.toLowerCase();

  // Invertimos la cadena con split()+reverse()+join() = separamos, invertimos y volvemos a unir
  const cadenaInvertida = cadenaMinus.split("").reverse().join("");

  // Comparamos y devolvemos true si la cadena normalizada es idéntica a la invertida.
  return cadenaMinus === cadenaInvertida;
}

console.log("4. Encontrar el palíndromo - Resultados:");
console.log(esPalindromo("neuquen")); // Resultado: true
console.log(esPalindromo("reconocer")); // Resultado: true
console.log(esPalindromo("rallar")); // Resultado: true
console.log(esPalindromo("JavaScript")); // Resultado: false

//#######################################################################################################
// 5. Crear un programa para convertir la edad de un perro a años humanos
function edadPerrunos() {
  // Con prompt() solicitamos la edad al usuario en el browser.
  let edadPerroStr = prompt("Por favor, ingresa la edad de tu perro:");

  // Convertimos el valor de string a un número entero (int).
  let edadPerro = parseInt(edadPerroStr);

  // Verificación de la entrada: Aseguramos que sea un número válido y positivo.
  if (isNaN(edadPerro) || edadPerro <= 0) {
    console.log(
      "Error: Por favor, ingresa una edad numérica válida y positiva."
    );
    return; // return vacio para terminar la función si hay un error.
  }

  // Calculamos la edad humana equivalente (multiplicando por 7).
  let edadHumana = edadPerro * 7;

  console.log(`Tu perro tiene ${edadHumana} años humanos`);
}

console.log(
  "5. Crear un programa para convertir la edad de un perro a años humanos (prompt)"
);
// Llamamos a la función
edadPerrunos();

//#######################################################################################################
// 6. Convertir la primera letra de cada palabra en mayúscula
function capitalizarPalabras(cadena) {
  // Convertimos la cadena en un array separando pro espacio
  const palabras = cadena.split(" ");

  // Creamos un arreglo vacío para guardar las palabras capitalizadas.
  const palabrasCapitalizadas = [];

  // Iteramos sobre cada palabra del arreglo.
  for (let i = 0; i < palabras.length; i++) {
    const palabra = palabras[i];

    // Verificamos si la palabra no está vacía (en caso de espacios dobles).
    if (palabra.length > 0) {
      // Obtenemos la primera letra y la convertimos a mayúscula.
      const primeraLetra = palabra[0].toUpperCase();

      // Obtenemos el resto de la palabra desde índice 1 con slice() y convertimos a minúscula.
      const restoPalabra = palabra.slice(1).toLowerCase();

      // Unimos la primera letra capitalizada con el resto.
      const palabraCapitalizada = primeraLetra + restoPalabra;

      // Agregamos la nueva palabra al arreglo de resultados.
      palabrasCapitalizadas.push(palabraCapitalizada);
    } else {
      // Si la palabra está vacía (ej espacio doble) agregamos un string vacío.
      palabrasCapitalizadas.push("");
    }
  }

  // Unimos el arreglo palabrasCapitalizadas en un solo string, separado por un espacio.
  return palabrasCapitalizadas.join(" ");
}

console.log(
  "6. Convertir la primera letra de cada palabra en mayúscula - Resultados:"
);
console.log(capitalizarPalabras("hola mundo desde javascript")); // Resultado: Hola Mundo Desde Javascript
console.log(capitalizarPalabras("desarrollo front end ")); // Resultado: Desarrollo Front End

//#######################################################################################################
// 7. Generar los primeros N números de la sucesión de Fibonacci
function fibonacci(n) {
  // Excepción 1: Si n es 0 o menos, devolvemos un array vacío.
  if (n <= 0) {
    return [];
  }
  // Excepción 2: Si n es 1, solo devolvemos el primer número (0).
  if (n === 1) {
    return [0];
  }
  // Inicializamos el array con los dos primeros números de la serie Fibonacci.
  const secuencia = [0, 1];

  // Excepción 3: Si n es 2, devolvemos los dos primeros números.
  if (n === 2) {
    return secuencia;
  }

  // Usamos un bucle for para generar el resto de los números.
  // Comenzamos en i = 2 porque ya tenemos los dos primeros números (variable secuencia).
  for (let i = 2; i < n; i++) {
    // Obtenemos los dos números anteriores.
    const numAnterior1 = secuencia[i - 1]; // El número anterior inmediato
    const numAnterior2 = secuencia[i - 2]; // El número dos posiciones antes

    // Calculamos el siguiente número sumándolos.
    const siguienteNum = numAnterior1 + numAnterior2;

    // Agregamos el nuevo número al final de la secuencia.
    secuencia.push(siguienteNum);
  }

  // Devolvemos el array de la secuencia.
  return secuencia;
}

console.log(
  "7. Generar los primeros N números de la sucesión de Fibonacci - Resultados:"
);
console.log(fibonacci(5)); // Resultado: [0, 1, 1, 2, 3]
console.log(fibonacci(1)); // Resultado: [0]
console.log(fibonacci(8)); // Resultado: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacci(0)); // Resultado: []
console.log(fibonacci(-1)); // Resultado: []

//#######################################################################################################
// 8. Lista de Productos
const productos = [
  {
    id: 1,
    nombre: "Laptop",
    precio: 1200,
    stock: 15,
    categoria: "electrónica",
  },
  { id: 2, nombre: "Mouse", precio: 25, stock: 50, categoria: "electrónica" },
  { id: 3, nombre: "Teclado", precio: 45, stock: 30, categoria: "electrónica" },
  {
    id: 4,
    nombre: "Monitor",
    precio: 300,
    stock: 20,
    categoria: "electrónica",
  },
  { id: 5, nombre: "Libro", precio: 15, stock: 100, categoria: "libros" },
];

console.log("8. Lista de Productos - Resultados:");
// 1. Usando forEach: Mostrar en consola cada producto con su nombre y precio
console.log("--- 1. Usando forEach ---");
productos.forEach((producto) => {
  console.log(`Producto: ${producto.nombre}, Precio: $${producto.precio}`);
});
/*
Resultado:
--- 1. Usando forEach ---
Producto: Laptop, Precio: $1200
Producto: Mouse, Precio: $25
Producto: Teclado, Precio: $45
Producto: Monitor, Precio: $300
Producto: Libro, Precio: $15
*/

// 2. Usando map: Crear un array con solo los nombres de los productos
console.log("--- 2. Usando map ---");
const nombres = productos.map((producto) => producto.nombre);
console.log(nombres);
/*
Resultado:
--- 2. Usando map ---
[ 'Laptop', 'Mouse', 'Teclado', 'Monitor', 'Libro' ]
*/

// 3. Usando filter: Obtener productos electrónicos con stock mayor a 20
console.log("--- 3. Usando filter ---");
const stockSuficiente = productos.filter(
  (producto) => producto.categoria === "electrónica" && producto.stock > 20
);
console.log(stockSuficiente);
/*
Resultado:
--- 3. Usando filter ---
[
  {
    id: 2,
    nombre: 'Mouse',
    precio: 25,
    stock: 50,
    categoria: 'electrónica'
  },
  {
    id: 3,
    nombre: 'Teclado',
    precio: 45,
    stock: 30,
    categoria: 'electrónica'
  }
]
*/

// 4. Usando find: Encontrar el producto con id 3
console.log("--- 4. Usando find ---");
const productoId3 = productos.find((producto) => producto.id === 3);
console.log(productoId3);
/*
Resultado:
--- 4. Usando find ---
{
  id: 3,
  nombre: 'Teclado',
  precio: 45,
  stock: 30,
  categoria: 'electrónica'
}
*/

// 5. Usando reduce: Calcular el valor total del inventario (precio * stock)
console.log("--- 5. Usando reduce ---");
const valorTotalInventario = productos.reduce((acumulador, producto) => {
  // Calculamos el valor total de un producto (precio * stock)
  const valorTotalProducto = producto.precio * producto.stock;
  // Sumamos el valor al acumulador
  return acumulador + valorTotalProducto;
}, 0);
console.log(`Valor Total del Inventario: $${valorTotalInventario}`);
/*
Resultado:
--- 5. Usando reduce ---
Valor Total del Inventario: $28100
*/

//#######################################################################################################
// 9. Estudiantes y Calificaciones
const estudiantes = [
  { id: 1, nombre: "Ana", edad: 20, calificaciones: [8, 9, 7, 8] },
  { id: 2, nombre: "Carlos", edad: 22, calificaciones: [6, 7, 8, 7] },
  { id: 3, nombre: "María", edad: 21, calificaciones: [9, 9, 8, 10] },
  { id: 4, nombre: "Juan", edad: 19, calificaciones: [7, 6, 5, 8] },
];

console.log("9. Estudiantes y Calificaciones - Resultados:");
// 1. Usando forEach: Mostrar nombre y edad de cada estudiante
console.log("--- 1. Usando forEach: Nombre y Edad ---");
estudiantes.forEach((estudiante) => {
  console.log(`Nombre: ${estudiante.nombre} - edad: ${estudiante.edad} años.`);
});
/*
Resultado:
--- 1. Usando forEach: Nombre y Edad ---
Nombre: Ana - edad: 20 años.
Nombre: Carlos - edad: 22 años.
Nombre: María - edad: 21 años.
Nombre: Juan - edad: 19 años.

*/

// 2. Usando map: Crear array de objetos con nombre y promedio de calificaciones
console.log("--- 2. Usando map: Nombre y Promedio ---");

const calcularPromedio = (calificaciones) => {
  // calculamos el promedio con reduce (suma / cantidad)
  const suma = calificaciones.reduce(
    (acumulador, calificacion) => acumulador + calificacion,
    0
  );

  return suma / calificaciones.length;
};

const promediosEstudiantes = estudiantes.map((estudiante) => {
  const promedio = calcularPromedio(estudiante.calificaciones);
  return {
    nombre: estudiante.nombre,
    promedio: promedio.toFixed(2), // Con .toFixed(2) mostramos 2 decimales
  };
});
console.log(promediosEstudiantes);
/*
Resultado:
--- 2. Usando map: Nombre y Promedio --- 
[
  { nombre: 'Ana', promedio: '8.00' },
  { nombre: 'Carlos', promedio: '7.00' },
  { nombre: 'María', promedio: '9.00' },
  { nombre: 'Juan', promedio: '6.50' }
]
*/

// 3. Usando filter: Obtener estudiantes con promedio mayor a 7.5
console.log("--- 3. Usando filter: Promedio > 7.5 ---");
const mejoresEstudiantes = estudiantes.filter((estudiante) => {
  const promedio = calcularPromedio(estudiante.calificaciones);
  return promedio > 7.5;
});
console.log(mejoresEstudiantes);
/* Resultado:
--- 3. Usando filter: Promedio > 7.5 ---
[
  { id: 1, nombre: 'Ana', edad: 20, calificaciones: [8, 9, 7, 8] }, // Promedio 8.0
  { id: 3, nombre: 'María', edad: 21, calificaciones: [9, 9, 8, 10] } // Promedio 9.0
]
*/

// 4. Usando find: Encontrar estudiante llamado 'María'
console.log("--- 4. Usando find: Encontrar a María ---");
const estudianteBuscado = estudiantes.find(
  (estudiante) => estudiante.nombre === "María"
);
console.log(estudianteBuscado);
/* Resultado:
--- 4. Usando find: Encontrar a María ---
{ id: 3, nombre: 'María', edad: 21, calificaciones: [9, 9, 8, 10] }
*/

//#######################################################################################################
//10. Películas
const peliculas = [
  {
    id: 1,
    titulo: "El Padrino",
    año: 1972,
    duracion: 175,
    genero: "drama",
    rating: 9.2,
  },
  {
    id: 2,
    titulo: "Pulp Fiction",
    año: 1994,
    duracion: 154,
    genero: "crimen",
    rating: 8.9,
  },
  {
    id: 3,
    titulo: "El Señor de los Anillos",
    año: 2001,
    duracion: 178,
    genero: "fantasía",
    rating: 8.8,
  },
  {
    id: 4,
    titulo: "Interestelar",
    año: 2014,
    duracion: 169,
    genero: "ciencia ficción",
    rating: 8.6,
  },
  {
    id: 5,
    titulo: "Parásitos",
    año: 2019,
    duracion: 132,
    genero: "drama",
    rating: 8.6,
  },
];

console.log("10. Películas - Resultados:");
// 1. Usando forEach: Mostrar título y año de cada película
console.log("--- 1. Usando forEach: Título y Año ---");
peliculas.forEach((pelicula) => {
  console.log(`Título: ${pelicula.titulo}, Año: ${pelicula.año}`);
});
/* Resultado:
--- 1. Usando forEach: Título y Año ---
Título: El Padrino, Año: 1972
Título: Pulp Fiction, Año: 1994
Título: El Señor de los Anillos, Año: 2001
Título: Interestelar, Año: 2014
Título: Parásitos, Año: 2019
*/

// 2. Usando map: Crear array de títulos en mayúsculas
console.log("--- 2. Usando map: Títulos en Mayúsculas ---");
const titulosEnMayusculas = peliculas.map((pelicula) =>
  pelicula.titulo.toUpperCase()
);
console.log(titulosEnMayusculas);
/* Resultado:
--- 2. Usando map: Títulos en Mayúsculas ---
 ['EL PADRINO', 'PULP FICTION', 'EL SEÑOR DE LOS ANILLOS', 'INTERESTELAR', 'PARÁSITOS']
*/

// 3. Usando filter: Obtener películas de drama con rating mayor a 8.5
console.log("--- 3. Usando filter: Drama > 8.5 ---");
const mejoresPelisDeDrama = peliculas.filter(
  (pelicula) => pelicula.genero === "drama" && pelicula.rating > 8.5
);
console.log(mejoresPelisDeDrama);
/* Resultado:
[
  { id: 1, titulo: 'El Padrino', año: 1972, duracion: 175, genero: 'drama', rating: 9.2 },
  { id: 5, titulo: 'Parásitos', año: 2019, duracion: 132, genero: 'drama', rating: 8.6 }
]
*/

// 4. Usando find: Encontrar película estrenada en 2014
console.log("--- 4. Usando find: Película de 2014 ---");
const pelicula2014 = peliculas.find((pelicula) => pelicula.año === 2014);
console.log(pelicula2014);
/*
Resultado:
--- 4. Usando find: Película de 2014 ---
{
  id: 4,
  titulo: 'Interestelar',
  'año': 2014,
  duracion: 169,
  genero: 'ciencia ficción',
  rating: 8.6
}
*/

// 5. Usando reduce: Calcular la duración total de todas las películas
console.log("--- 5. Usando reduce: Duración Total ---");
const duracionTotal = peliculas.reduce((acumulador, pelicula) => {
  // Sumamos la duración de la película actual al acumulador
  return acumulador + pelicula.duracion;
}, 0);

console.log(`Duración total de las películas: ${duracionTotal} minutos`);
// Resultado: Duración total de las películas: 808 minutos
//#######################################################################################################
