class CardNumber{
    constructor(bin="434559", length_code){
        this.bin = bin
        this.length_code = length_code
    }
    
    _checkNum(num){
        const check = Array.from(num).reverse().map(Number);
        for (let i = 0; i < check.length; i++) {
            if (i % 2 == 0) {
                check[i] = check[i] * 2
                if (check[i] >= 10) {
                    check[i] = check[i] - 9
                }
            } 
        }
        let sum = check.reduce((total, currVal)=> total+currVal,0);
        let verif = 10-(sum%10)
        return verif
    }

    generate(){
        const bin_len =this.length_code - this.bin.length -1
        let nums = [];
        for(let i =0; i<bin_len;i++){
            let num = Math.floor(Math.random()*10)
            nums.push(num)
        }
        const number_res = this.bin.toString() + nums.join("") //devuelve el número como string
        let verif = this._checkNum(number_res)
        const result = number_res+verif.toString()

        return result;
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


const cardVal = {
    //Clean the string provided and return an only-number string
    _cleanStr: function (value) {
        let cleanValue = value.replace(/[^0-9]/g, "")
        if (cleanValue.length > 19 || cleanValue.length<13) {
            return;
        }
        return cleanValue;
    },
    //Evaluate if the string of numbers provided is a real Mod10 serie
    isValid: function (value) {
        value = this._cleanStr(value);
        const l = value.length
        if (!value) {
            console.log("Luhn only support 19 charcter long value")
            return false;
        }
        const check = Number(value.substring(l-1));
        let valEv = Array.from(value.substring(0,l-1), Number).reverse();   
        for (let i = 0; i < valEv.length; i++) {
            if (i % 2 == 0) {
                valEv[i] = valEv[i] * 2
                if (valEv[i] >= 10) {
                    valEv[i] = valEv[i] - 9
                }
            } 
        }
        const sum = valEv.reduce((total, currVal) => total + currVal, 0);
        if ((sum % 10)+check == 10) {
            return true;
        } else {
            return false;
        }
    },

    /*
        //index[0]-> index[1] Sistema de pago (MII)
        //Index[2]->index[5] Entidad Bancaria (INN/BIN)
        //Index[6]-index[11]o index[14] Número de cuenta (IAI)
        //index[15] dígito verificador (Check)

        const MII = value.substring(0,1);
        const INN_BIN = value.substring(2,5);
        const IAI = value.substring(6,11);
        const IAI_2 = value.substring(6,14);
        const Check = value.substring(15);

    */

    parseCardData : function (number) {
        const l = number.length
        if(this.isValid(number)){
            const MII  = number.substring(0,1);
            const BIN = number.substring(1,6);
            const BIN_INN = number.substring(0,6);
            const IAI = number.substring(6,l-1);
            const check = number.substring(l-1);
            //console.log(`${MII}-${BIN}-${IAI}-${check}`)
            console.log(`BIN: ${BIN_INN}`);
            switch(MII){
                case '3':
                    console.log('American Express')
                    break;
                case '4':
                    console.log('VISA')
                    break;
                case '5':
                    console.log('Mastercard')
                    break;
                case '6':
                    console.log('Discovery Card')
                    break;
                default:
                    break;
            }
        }else{
            return
        }
    },

    numGen: function (bin,length) {
        const card_value = new CardNumber(bin,length);
        return card_value.generate()
    }

}

export default cardVal;