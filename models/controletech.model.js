const mongoose =require('mongoose'); 
const ControleSchema =new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        default: 0,
    },
    date: {
        type: String,
        required: true,
        default: 0,
    },
    vehicule: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicul",
      },
    
    }); 
    

module.exports= mongoose.model('Controletech',ControleSchema)