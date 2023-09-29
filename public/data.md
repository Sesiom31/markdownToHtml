# Introducción a JavaScript

JavaScript es un lenguaje de programación versátil y ampliamente utilizado en el desarrollo web. Permite agregar interactividad y dinamismo a las páginas web.

## Variables en JavaScript

En JavaScript, las variables se utilizan para almacenar datos. Pueden ser declaradas con 'var', 'let' o 'const', y pueden contener números, cadenas de texto, objetos y otros tipos de datos.

### Declaración de Variables

```javascript
var nombre = "Juan";
let edad = 30;
const PI = 3.14;
```

### Tipos de Datos en JavaScript

JavaScript tiene varios tipos de datos, incluyendo números, cadenas de texto, booleanos, objetos y arreglos. También es un lenguaje de tipado dinámico.

# Funciones en JavaScript

Las funciones son bloques de código reutilizables que realizan una tarea específica. Pueden recibir parámetros y devolver un valor.

## Declaración de una Función

```javascript
function saludar(nombre) {
  return "Hola, " + nombre + "!";
}
```

## Llamada a una Función

```javascript
var mensaje = saludar("María");
console.log(mensaje); // Output: Hola, María!
```

# Estructuras de Control en JavaScript

JavaScript incluye estructuras de control como bucles y condicionales que permiten tomar decisiones y repetir tareas.

## Bucle `for`

```javascript
for (var i = 0; i < 5; i++) {
  console.log("Iteración #" + i);
}
```

## Condicionales `if-else`

```javascript
var edad = 20;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
```

## Tablas

| Concepto           | Descripción                                                                                                                                                                                                       |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hoisting           | En JavaScript, las declaraciones de variables y funciones se "elevan" al principio del ámbito en el que se encuentran. Esto significa que puedes usar una variable o función antes de haberla declarado.          |
| Closure            | Un closure es una función que tiene acceso a su propio ámbito, al ámbito en el que fue creada y al ámbito global. Esto permite mantener el estado incluso después de que la función haya terminado de ejecutarse. |
| Callback Function  | Una función de callback es una función que se pasa como argumento a otra función y se ejecuta después de que esta última ha terminado de ejecutarse. Es común en operaciones asincrónicas en JavaScript.          |
| ES6 Arrow Function | Las arrow functions son una forma más concisa de escribir funciones en JavaScript introducida en ECMAScript 6. Son especialmente útiles para funciones anónimas y funciones de flecha.                            |

### Enlace a la documentacion de JavaScript

[Enlace js](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide)

### Ejemplo de variable en linea

`let variable = 'valor';`

### Ejemplo de lista desordenada

- Elemento 1
- Elemento 2
- Elemento 3

### Ejemplo de lista ordenada

1. Primer elemento
2. Segundo elemento
3. Tercer elemento

### Ejemplo de una cita

> "La programación es una de las pocas disciplinas en las que uno puede hacer algo que funcione la primera vez y aún así tener la certeza de que hay una manera mucho mejor de hacerlo." - Marijn Haverbeke

### Ejemplo de una imagen

![Icono React](logo192.png)

### Markdown en formato GitHub

- [x] Tarea completada
- [ ] Tarea no completada

@username
#123

| Encabezado 1 | Encabezado 2 |
| ------------ | ------------ |
| Celda 1      | Celda 2      |
| Celda 3      | Celda 4      |

```python
def saludar(nombre):
print(f'Hola, {nombre}!')
```

**Este es el Fin**
