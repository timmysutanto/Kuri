const express = require('express');
const router = express.Router();

router.post('/:decypher/:angka',(req,res,next) =>{
    var decypher = req.params.decypher;
    var angka = parseInt(req.params.angka);
    var result = "";
    var charcode;
    for(i=0;i<decypher.length;i++){
        charcode = decypher.charCodeAt(i);
        if((charcode >= 65 && charcode <= 90) || (charcode >= 97 && charcode <= 122)){
            charcode -= (angka%26);
            if(charcode < 65){
                charcode += 26;
            }
            else if(charcode < 97){
                charcode += 26;
            }
        }
        result += String.fromCharCode(charcode);
    }
    res.status(200).json({
        plaintext : result,
    });
});

module.exports = router;