const mongoose = require('mongoose');

const kuponMusteriSchema = new mongoose.Schema({
    ad: {
        type: String,
        
    },
    soyad: {
        type:String
    },
    yas: {
        type: String
    },
    telefon: {
        type: String
    },
    cinsiyet: {
        type: String
    },
    email: {
        type: String
    },
    acceptsKvkk: {
        type: Boolean,
        default: false
    }
    
});

const kuponMusteri = mongoose.model('kuponMusteri', kuponMusteriSchema);
export default kuponMusteri;