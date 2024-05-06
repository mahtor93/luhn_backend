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
            {$match:{ country: aimCountry}},
            {$group: {_id:"$bank"}},
            { $project: {bank:"$_id",_id:0}}
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
            {$group: {_id:"$network"}},
            {$project:{network:"$_id",_id:0}}
        ])
        const networkNames = networkList.map((net =>net.network))
        return res.send(networkNames.sort())
    }catch(error){
        console.error("Error while retrieving data",error)
    }
}

async function generateCard(req,res){
    try{
        
    }catch(error){
        console.error("Error while retrieving data", error)
    }
}
export { getCardData,getBinData,getCountries,getBanks, getNewtwork }