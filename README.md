# Ejercicios_strings_arrays_DSWF_2B_2C25

TPO1 - Ejercicios de strings y arrays en JavaScript

### 1. Calcular el área de un rectángulo

Escribe una función que reciba la longitud y el ancho de un rectángulo y devuelva su área.
La funcion no debe devolver un console.log() sino retornar un valor, llamaremos a la funcion dentro de un
console.log() .
La idea de esto es comprender que algunas funciones retornan un valor y otras simplemente hacen otras cosas, como
imprimir un mensaje por consola. Las que retornan algo, deberán incluir la palabra clave return .

- Longitud = ancho x alto
  console.log(calcularAreaRectangulo(5, 3));
- Resultado: 15

### 2. Contar palabras en una cadena

Escribe una función que reciba una cadena de texto (string) y devuelva la cantidad de palabras en la cadena.
console.log(contarPalabras("Humahuaca es un lugar copado"));

- Resultado: 5

### 3. Contar vocales en una cadena

Escribe una función que reciba una cadena y cuente el número de vocales.
console.log(contarVocales("JavaScript"));

- Resultado: 3

### 4. Encontrar el palíndromo

Escribe una función que reciba un string y devuelva true o false si el string es un palíndromo.

- Ejemplos, neuquen, reconocer, rallar
  console.log(esPalindromo("neuquen")); --> true

### 5. Crear un programa para convertir la edad de un perro a años humanos

Escribe una función que tome un valor de un usuario, utilizando una ventana emergente prompt y calcule la edad canina,
que equivale a 7 veces la edad humana.
Esta funcion no debe devolver un valor sino mostrar por consola un mensaje como el del ejemplo.
edadCanina(7);

- Tu perro tiene 49 años humanos

### 6. Convertir la primera letra de cada palabra en mayúscula

Escribe una función que reciba una cadena y convierta la primera letra de cada palabra en mayúscula.
console.log(capitalizarPalabras("hola mundo desde javascript"));

- Resultado: "Hola Mundo Desde Javascript"

### 7. Generar los primeros N números de la sucesión de Fibonacci

Escribe una función que tome un número n y devuelva los primeros n números de la sucesión de Fibonacci.
console.log(fibonacci(5));

- Resultado: [0, 1, 1, 2, 3]

### 8. Lista de Productos

const productos = [
{ id: 1, nombre: 'Laptop', precio: 1200, stock: 15, categoria: 'electrónica' },
{ id: 2, nombre: 'Mouse', precio: 25, stock: 50, categoria: 'electrónica' },
{ id: 3, nombre: 'Teclado', precio: 45, stock: 30, categoria: 'electrónica' },
{ id: 4, nombre: 'Monitor', precio: 300, stock: 20, categoria: 'electrónica' },
{ id: 5, nombre: 'Libro', precio: 15, stock: 100, categoria: 'libros' }
];

1. Usando forEach: Mostrar en consola cada producto con su nombre y precio
2. Usando map: Crear un array con solo los nombres de los productos
3. Usando filter: Obtener productos electrónicos con stock mayor a 20
4. Usando find: Encontrar el producto con id 3
5. Usando reduce: Calcular el valor total del inventario (precio \* stock)

### 9. Estudiantes y Calificaciones

const estudiantes = [
{ id: 1, nombre: 'Ana', edad: 20, calificaciones: [8, 9, 7, 8] },
{ id: 2, nombre: 'Carlos', edad: 22, calificaciones: [6, 7, 8, 7] },
{ id: 3, nombre: 'María', edad: 21, calificaciones: [9, 9, 8, 10] },
{ id: 4, nombre: 'Juan', edad: 19, calificaciones: [7, 6, 5, 8] }
];

1. Usando forEach: Mostrar nombre y edad de cada estudiante
2. Usando map: Crear array de objetos con nombre y promedio de calificaciones
3. Usando filter: Obtener estudiantes con promedio mayor a 7.5
4. Usando find: Encontrar estudiante llamado 'María'
5. Usando reduce: Calcular la edad promedio de los estudiantes

### 10. Películas

const peliculas = [
{ id: 1, titulo: 'El Padrino', año: 1972, duracion: 175, genero: 'drama', rating: 9.2 },
{ id: 2, titulo: 'Pulp Fiction', año: 1994, duracion: 154, genero: 'crimen', rating: 8.9 },
{ id: 3, titulo: 'El Señor de los Anillos', año: 2001, duracion: 178, genero: 'fantasía', rating: 8.8 },
{ id: 4, titulo: 'Interestelar', año: 2014, duracion: 169, genero: 'ciencia ficción', rating: 8.6 },
{ id: 5, titulo: 'Parásitos', año: 2019, duracion: 132, genero: 'drama', rating: 8.6 }
];

1. Usando forEach: Mostrar título y año de cada película
2. Usando map: Crear array de títulos en mayúsculas
3. Usando filter: Obtener películas de drama con rating mayor a 8.5
4. Usando find: Encontrar película estrenada en 2014
5. Usando reduce: Calcular la duración total de todas las películas
