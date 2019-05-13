const express = require('express');
const router = express.Router();

router.post('/:decypher/:angka',(req,res,next) =>{
    var decypher = req.params.decypher;
    var angka = parseInt(req.params.angka);
    var result = "";
    var charcode;
    for(i=0;i<decypher.length;i++){
        charcode = decypher.charCodeAt(i) - angka;
        result += String.fromCharCode(charcode);
    }
    res.status(200).json({
        plaintext : result,
    });
});

module.exports = router;