import express from 'express'
import creditCardUtils from './src/luhn.js'
import router from './src/routes/creditCardUtilities.routes.js';



let start = new Date().getTime();

const app = express()
const data = creditCardUtils.allData()

/*
data.forEach(value => {
    let bin = value.bin
    for(let i = 0;i<1;i++){
        const card_number = creditCardUtils.generateNumber(bin, 16)
        if (creditCardUtils.validate(card_number)) {
            console.log(`${card_number} VALID`)
            creditCardUtils.parseCardData(card_number)
        } else {
            console.log(`${card_number} NOT VALID`)
        }
    }
})
*/

const PORT = 3333

app.use('/',router)
app.listen(PORT, () => { });

export default app;