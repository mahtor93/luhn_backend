import creditCardUtils from "../luhn.js";

async function getCardData(req,res){
    try{
        const { number } = await req.params
        if(!number){
            
        }
        if(!creditCardUtils.validate(number)){
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

export { getCardData }