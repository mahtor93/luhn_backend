import {loadData, searchBin} from './data/data_search.js'
const data = loadData()

function _luhn(array){
    for(let i =0; i<array.length;i++){
        if(i%2 ==0){
            array[i] = array[i]*2
            if(array[i]>=10){
                array[i] = array[i] - 9
            }
        }
    }
    const sum = array.reduce((total, currVal)=> total+currVal,0);
    return sum
}

function _cleanStr(value){
    let cleanValue = value.replace(/[^0-9]/g, "")
    if (cleanValue.length > 19 || cleanValue.length<13) {
        return;
    }
    return cleanValue;
}

class CardNumber{
    constructor(bin="434559", length_code){
        this.bin = bin
        this.length_code = length_code
    }
    
    _genVerif(num){
        const check = Array.from(num).reverse().map(Number);
        const sum =_luhn(check)
        let verif = 10-(sum%10)
        return verif
    }

    generate(){
        while(true){
            const bin_len =this.length_code - this.bin.length -1
            let nums = [];
            for(let i =0; i<bin_len;i++){
                let num = Math.floor(Math.random()*10)
                nums.push(num)
            }
            const number_res = this.bin.toString() + nums.join("") //devuelve el número como string
            let verif = this._genVerif(number_res)
            const result = number_res+verif.toString()
            if(creditCardUtils.validate(result)){
                return result;
            }
        }
    }
}

class bankEntity{
    constructor(bin,country,bank,type,network,level){
        this.bin = bin //número Bin que identifica al emisor
        this.country = country //País de origen
        this.bank = bank //El nombre del banco emisor
        this.type = type //el tipo es credito, débito
        this.network = network //network hace referencia a 'marca de carro'
        this.level = level //el nivel es classic, gold, platinum, signature, etc.
    }
}
class Card {
    constructor(cardNumber, bankEntity) {
        this.cardNumber = cardNumber;
        this.bankEntity = bankEntity;
    }
}

const creditCardUtils = {
    validate: function (value) {
        if (typeof value !== 'string') {
            value = String(value);
        }
        value = _cleanStr(value);
        const l = value.length
        if (!value) {
            console.log("Luhn only support 19 charcter long value")
            return false;
        }
        const check = Number(value.substring(l-1));
        let valEv = Array.from(value.substring(0,l-1), Number).reverse();   
        const sum = _luhn(valEv);
        if ((sum % 10)+check == 10) {
            return true;
        } else {
            return false;
        }
    },

    parseCardData : function (number) {
        if(this.validate(number)){
            const BIN_INN = number.substring(0,6);
            const card_data = searchBin(BIN_INN,data);
            return card_data
 
        }else{
            return
        }
    },

    findCardBin : function (number){
        const card_data = searchBin(number,data)
        return card_data
    },

    generateNumber: function (bin,length) {
        const card_value = new CardNumber(bin,length);
        return card_value.generate()
    },
    allData: function(){
        return loadData();
    }

}

export default creditCardUtils;