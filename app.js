import express from 'express'
import cardVal from './src/luhn.js'
import readline from 'readline'

const app = express()



const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})



rl.question('Ingresa un número de tarjeta: ',(answer)=>{
    const userInput = answer
    let bin = userInput?userInput:"529885"


const card_number = cardVal.numGen(bin, 16)
if (cardVal.isValid(card_number)) {
    console.log(`${card_number} VALID`)
    cardVal.parseCardData(card_number)
} else {
    console.log(`${card_number} NOT VALID`)
}

rl.close

})
//const userInput = prompt("Ingresa un número de tarjeta:")



const PORT = 3333



app.listen(PORT, () => {
   // console.log(`Aplicación corriendo en el puerto ${PORT}`)
});


export default app;