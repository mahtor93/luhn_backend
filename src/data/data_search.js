import fs from 'fs'
import path from 'path'
const currentFileURL = import.meta.url
const currentDir = path.dirname(currentFileURL)

const loadData = () => {
    try{
        const data = fs.readFileSync(path.resolve(currentDir.replace('file://', ''), 'CARD_DATA.json'), 'utf8');
        return JSON.parse(data)
    }catch(error){
        console.error('If you haven\'t downloaded the card data, try running npm i creditCardUtils-<country>')
        console.error('Error loading card data:', error)
        return[]
    }
}

const searchBin = (BIN) => {
    const data = loadData()
    const res = data.find(obj => obj.BIN === BIN)
    return res || null
}

export { loadData, searchBin}