import creditCardUtils from "../luhn.js";

async function getCardData(req,res){
    try{
        const { number } = req.body
        if(!number){
            throw new Error('No enviaste número de tarjeta')
        }
        if (!creditCardUtils.validate(number)){
            throw new Error('Número de tarjeta inválido')
        } 


        const cardData = creditCardUtils.parseCardData(number)
        const result = {
            "Input":number,
            ...cardData
        }
        res.send(result)

    }catch(error){
        console.error('Error al obtener los datos de Tarjeta', error);
        res.status(500).send('Error al obtener los datos de Tarjeta');
    }
}

async function getBinData(req,res){
    try{
        const { bin } = req.params
        const result = creditCardUtils.getBinData(bin)
        res.send(result)
    }catch(error){
        console.error('Error al obtener los datos del Bin', error);
        res.status(500).send('Error al obtener los datos del Bin');
    }
}

async function generateCard(req,res){
    try{
        const cantidad = parseInt(req.params.cantidad)
        if(isNaN(cantidad)){
            throw new Error('La cantidad ingresada no es un número valido')
        }

        let arrayCards =[]
        for(let i = 0;i<cantidad;i++){
            const card = creditCardUtils.generateCard()
            arrayCards.push(card)
        }
        res.send(arrayCards)
    }catch(error){
        console.error('Error al generar nueva tarjeta')
        res.status(500).send('Algo salió mal en el servidor')
    }
}


export { getCardData, getBinData, generateCard }