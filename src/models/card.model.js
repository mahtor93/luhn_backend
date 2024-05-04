import mongoose from 'mongoose'

const bin_countries = new mongoose.Schema({
    bin:{type: String, required:true},
    country:{type:String, default:"N/A"},
    bank:{type:String, default:"N/A"},
    network:{type:String, default:"N/A"},
    type:{type:String, default:"N/A"},
    level:{type:String, default: "N/A"}
})
const BinCountry = mongoose.model("bin_countries", bin_countries, "bin_countries");

export default BinCountry