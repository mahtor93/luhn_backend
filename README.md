**Importación:**

  import creditCardUtils from '/path/to/luhn.js';

**Crear un número de tarjeta:**

  let BIN = "123456"  
  const card_number = creditCardUtils.generateNumber(BIN, _largo-del-numero_)

  Retornará un string con el número generado.

**Validar un número de tarjeta:**

  let num = "1234567890123456"  
  creditCardUtils.validate(num)

  Retornará true si es un numero válido o false si no lo es.

**Obtener datos de una tarjeta**

  let num = "1234567890123456"  
  const cardData = creditCardUtils.parseCardData(num);

  Retornará un objeto json almacenado en la variable cardData.

**Obtener datos de un bin**

  let bin = "123456"  
  const binData = creditCardUtils.getBinData(bin)

  Retornará un objeto json almacenado en la variable binData

########################[ API TESTING ]#########################

API para probar las funciones de una librería en proceso que permite la identificación de números de tarjetas de crédito emitidas por entidades bancarias chilenas. Basado en el Algoritmo de Luhn, además proporciona opciones para generar números validos de tarjetas, previo ingreso de un BIN/IIN.
El objetivo es producir una Librería de código que funcione como una herramienta para profesionales del área de la información enfocada en la manipulación de información financiera.

**SOBRE LA API**

La carpeta src/data contiene carpetas con nombres de países, en cada una hay dos archivos .json, uno donde los números bin se ordenan por banco (datos_bancarios_name.json) y otro donde se ordenan por número bin de menor a mayor.
En la carpeta puede encontrarse además un archivo llamado data_search.js que contiene una función que lee los datos de un archivo determinado. Actualmente está apuntando al a carpeta /USA, por lo que para buscar datos de tarjetas emitidas por entidades financieras chilenas, hay que cambiar la variable country.
La variable cou
