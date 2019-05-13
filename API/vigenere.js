const express = require('express');
const router = express.Router();

router.post('/:vigenere/:key',(req,res,next) =>{
    var vigenere = req.params.vigenere;
    var key = req.params.key;
    var result = "";
    var charcode;
    for(i=0;i<vigenere.length;i++){
        charcode = vigenere.charCodeAt(i);
        result += String.fromCharCode(charcode);
    }
    res.status(200).json({
        ciphertext : result,
    });
});

module.exports = router;