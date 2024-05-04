import fs from 'fs'
import path from 'path'
import Card from './src/models/card.model.js'

const currentFileURL = import.meta.url
const currentDir = path.dirname(currentFileURL)

const country = 'USA'

const loadData = () => {
    try{
        const data = fs.readFileSync(path.resolve(currentDir.replace('file://', ''), `${country}/datos_bancarios_sort.json`), 'utf8');
        return JSON.parse(data)
    }catch(error){
        console.error('If you haven\'t downloaded the card data, try running npm i creditCardUtils-<country>')
        console.error('Error loading card data:', error)
        return[]
    }
}
function _binarySearch(bin, objArray) {
    let lo = 0;
    let hi = objArray.length - 1;
    while (lo <= hi) {
        let mid = Math.floor(lo + (hi - lo) / 2);
        let currentBin = objArray[mid].bin;
        // Comparar BIN como cadenas de caracteres
        if (currentBin === bin) {
            return objArray[mid];
        } else if (currentBin < bin) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return null; // Si no se encuentra el elemento
}

const searchBin = (bin) => {
    const data = loadData()
    const res = _binarySearch(bin,data)
    //const res = data.find(obj => obj.bin === bin)
    return res || {'error':'card data not loaded'}
}

const randomBin = () =>{
    const data = loadData()
    let randomIndex = Math.floor(Math.random()*data.length)
    const res = data[randomIndex].bin
    return res
}

const randomCard = () => {
    const data = loadData()
    let randomIndex = Math.floor(Math.random()*data.length)
    const res = data[randomIndex]
    return res
}

export { loadData, searchBin, randomBin, randomCard }