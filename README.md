**Importacion:**

  import cardVal from '/path/to/luhn.js';

**Crear un número de tarjeta:**

  let BIN = "123456" 
  const card_number = cardVal.numGen(BIN, _largo-del-numero_)

Retornará un string con el número generado.


**Validar un número de tarjeta:**

  let num = "1234567890123456"
  cardVal.isValid(num)

Retornará true si es un numero válido o false si no lo es.

**Obtener datos de una tarjeta (En proceso de construcción)**
  let num = "1234567890123456" 
  cardVal.parseCardData(num);

Retornará la red de la tarjeta y el BIN.


Programa para probar las funciones de una librería en proceso que permite la identificación de números de tarjetas de crédito emitidas por entidades bancarias chilenas. Basado en el Algoritmo de Luhn, además proporciona opciones para generar números validos de tarjetas, previo ingreso de un BIN/IIN.
El objetivo es producir una Librería de código que funcione como una herramienta para profesionales del área de la información enfocada en la manipulación de información financiera.

**NOTA IMPORTANTE: La librería no hace, no pretende hacer ni hará en el futuro el envío de datos fuera del sistema que la mantiene en ejecución.**
