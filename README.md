# FizzBuzz

Realización del juego FizzBuzz en JavaScript aplicando [TDD](https://en.wikipedia.org/wiki/Test-driven_development "Test-Driven Development")

## Tecnologías

Las tecnologías usadas para realizar el proyecto ha sido `Nodemon`, `NodeJS`, `Vanilla JS` y `Jasmine`.

## Instalación de dependencias

Desde la terminal, usa el siguiente comando:

```console
npm install
```

## Ejecución del proyecto

Para ejecutar el proyecto desde la terminal usa el siguiente comando:

```console
npm run play [number]
```

Donde `[number]` es el número hasta donde se quiere probar. Por ejemplo:

```console
npm run play 20
```

Una vez ejecutado el comando anterior, se debería mostrar el siguiente resultado por consola:

```console
0: 0
1: 1
2: 2
3: Fizz
4: 4
5: Buzz
6: Fizz
7: 7
8: 8
9: Fizz
10: Buzz
11: 11
12: Fizz
13: 13
14: 14
15: FizzBuzz
16: 16
17: 17
18: Fizz
19: 19
20: Buzz
```

## Ejecución de los tests

Ejecución de los tests en modo normal:

```console
npm test
```

Ejecución de los test en modo watch:

```console
npm test:watch
```
