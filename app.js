import express from 'express'
import creditCardUtils from './src/luhn.js'

const app = express()
const data = creditCardUtils.allData()

data.forEach(value => {
    let bin = value.BIN
    for(let i = 0;i<100;i++){
        const card_number = creditCardUtils.generateNumber(bin, 16)
        if (creditCardUtils.validate(card_number)) {
            console.log(`${card_number} VALID`)
            creditCardUtils.parseCardData(card_number)
        } else {
            console.log(`${card_number} NOT VALID`)
        }
    }
})

const PORT = 3333

app.listen(PORT, () => { });

export default app;