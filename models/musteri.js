const mongoose = require('mongoose');

const musteriSchema = new mongoose.Schema({
    ad: {
        type: String,
        
    },
    soyad:{
        type: String
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

const musteri = mongoose.model('musteri', musteriSchema);
export default musteri;