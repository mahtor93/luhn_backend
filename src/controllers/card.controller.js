import creditCardUtils from '../luhn.js'
import BinCountry from '../models/card.model.js'

async function getCardData(req,res){
    try{
        const { number } = req.params
        console.log(number)
        if(!number){
            throw new Error("There is no number on your request")
        }
        if(!creditCardUtils.validate(number)){
            throw new Error("Invalid Card Number")
        }
        const cardData = number.substring(0,6)
        const result = await BinCountry.findOne({bin: cardData}, "bin country bank network type level")

        if(!result || result.length === 0){
            return res.status(400).send({ message:'Card data not found' })
        }
        console.log(result)
        return res.send(result)
    }catch(error){
        console.error("Error while retrieving data", error)
    }
}

async function getBinData(req,res){
    try{
        const { bin } = req.params
        console.log(bin)
        if(!bin){
            throw new Error("There is no number on your request")
        }

        const result = await BinCountry.findOne({bin: bin}, "bin country bank network type level")

        if(!result || result.length === 0){
            return res.status(400).send({ message:'Card data not found' })
        }
        return res.send(result)
    }catch(error){
        console.error("Error while retrieving data", error)
    }
}

async function getCountries(req,res){
    try{
        const countryList = await BinCountry.distinct("country")
        return res.send(countryList)
    }catch(error){
        console.error("Error retrieving countries list", error)
    }
}

async function getBanks(req,res){
    try{
        const { aimCountry } = req.params
        const bankList = await BinCountry.aggregate([
            {$match:{ country: aimCountry}}, //Selecciona todos los documentos que coincidan con aimCountry
            {$group: {_id:"$bank"}}, //Agrupa los documentos por el campo bank. (Se añade solo una vez cada elemento $bank y no todas sus repeticiones)
            {$project: {bank:"$_id",_id:0}} //
        ])
        const bankNames = bankList.map((bank) => bank.bank); // Obtener solo los nombres de los bancos

        return res.send(bankNames.sort());
    }catch(error){
        console.error("Error while retrieving bank data", error)
    }
}

async function getNewtwork(req,res){
    try{
        const { aimBank } = req.params
        console.log(aimBank)
        const bank = aimBank.replace(/_/g, " ")
        console.log(bank)
        const networkList = await BinCountry.aggregate([
            {$match:{ bank: bank}},
            {$group: {_id:"$network"}}, // _id representa el parámetro de unión que será utilizado para agrupar, en este caso por "network"
            {$project:{network:"$_id",_id:0}} //Se asigna el valor de network como _id y se elimina el otro _id por defecto. (retorna sólo network)
        ])
        const networkNames = networkList.map((net =>net.network))
        return res.send(networkNames.sort())
    }catch(error){
        console.error("Error while retrieving data",error)
    }
}

async function generateCard(req,res){
    try{
        const { country, bank, network } = req.query
        console.log(country)
        console.log(bank)
        console.log(network)
        const bin_number = await BinCountry.aggregate([
            {$match:{
                "country": country,
                "bank": bank,
                "network": network
            }},
            {$project:{_id:0,"type":1,"level":1,"bin":1}}
        ])
        console.log(bin_number)        
        const bin_data = bin_number.map(number => {
            return {
                "cardNumber": creditCardUtils.generateNumberCard(number.bin),
                "country":country,
                "bank":bank,
                "network":network,
                "type":number.type,
                "level":number.level,
            }
        })
        return res.send(bin_data)
    }catch(error){
        console.error("Error while retrieving data", error)
        return res.status(500).json({ error: "Error al generar las tarjetas",error }); // Enviar una respuesta de error al cliente
    }
}
export { getCardData,getBinData,getCountries,getBanks, getNewtwork,generateCard }