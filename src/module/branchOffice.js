const mongoose = require('mongoose');
const { Schema } = mongoose;

BranchOfficeSchema = new Schema({
    name: {type:String, required: true},
    address : {type:String, required: true},

});

module.exports = mongoose.model('BranchOffice' , BranchOfficeSchema);