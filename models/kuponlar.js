const mongoose = require('mongoose');

const kuponSchema = mongoose.Schema({
    kod: {
        type: String,
        
    },
    used: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId, ref: 'kuponMusteri',  
        
    }
});

const Kupon = mongoose.model('Kupon', kuponSchema);
export default Kupon;