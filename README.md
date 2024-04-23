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
La variable country puede tener los valores {Chile, China, USA}
El archivo data_search contiene un algoritmo de búsqueda binaria para encontrar el bin en el archivo seleccionado. 

**USO DE LA API**

Endpoints:

a) localhost/card/  
  - este endpoint requiere un body con el siguiente formato:  
  - { "number":"<número_de_la_tarjeta>" }  
  - Si el número de la tarjeta no pasa la comprobación de luhn, entonces no retornará datos sino el mensaje: 'número de tarjeta invalido'  
  - En caso de ingresar un numero válido, el endpoint retornará un json con la siguiente información:  
    __{  
      "input":"<numero_ingresado>",  
      "bin":"<bin>",  
      "country":"<country>",  
      "bank":"<bank>",  
      "network":"<network>",  
      "type":"<type>",  
      "level":"<level>"  
    }__

b) localhost/card/:bin  
  - Este endpoint requiere pasar el valor de un bin (length = 6 ) a través de la url  
  - Retorna el mismo json que el endpoint /card/, sin el valor de "input".

**NOTA IMPORTANTE: La API no guarda los datos de las tarjetas enviadas y la librería sólo requiere los 6 primeros números de la tarjeta para su identificación. No así la validación de tarjetas, que requiere un número completo**
