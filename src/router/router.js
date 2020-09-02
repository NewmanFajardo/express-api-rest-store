const express = require('express');
const router = express.Router();

const BranchOffice = require('../module/BranchOffice');

router.get('/' , async (req, res) => {
    const branchOffices = await BranchOffice.find();
    console.log(branchOffices);
    res.json(branchOffices);
});

router.get('/:id' , async (req, res) => {
    const branchOffice = await BranchOffice.findById(req.params.id);
    console.log(branchOffice);
    res.json(branchOffice);
});

router.post('/' , async (req, res) => {
    const {name , address } = req.body;
    const branchOffice = new BranchOffice({name , address});
    await branchOffice.save();
    console.log(branchOffice);
    res.json({status : "saved"});
});

router.put('/:id' , async (req, res) => {
    const {name , address } = req.body;
    const newBranchOffice = {name , address };
    await BranchOffice.findByIdAndUpdate(req.params.id , newBranchOffice);
    console.log(newBranchOffice);
    res.json({status : "updated"});
});

router.delete('/:id' , async (req, res) => {
    await BranchOffice.findByIdAndDelete(req.params.id);
    res.json({status : "deleted"});
});

module.exports = router;
