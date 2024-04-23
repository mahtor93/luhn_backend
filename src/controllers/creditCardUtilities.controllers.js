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



export { getCardData, getBinData }