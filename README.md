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
