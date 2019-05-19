const express = require('express');
const router = express.Router();

router.post('/:devigenere/:key',(req,res,next) =>{
    var devigenere = req.params.devigenere;
    var key = req.params.key;
    var result = "";
    var charcode;
    var j = 0;

    function banyakGeser(huruf){
        if(huruf.charCodeAt() >= 65 && huruf.charCodeAt() <= 90){
            return huruf.charCodeAt() - 64;
        }
        else if(huruf.charCodeAt() >= 97 && huruf.charCodeAt() <= 122){
            return huruf.charCodeAt() - 96;
        }
    }

    for(i=0;i<devigenere.length;i++){
        charcode = devigenere.charCodeAt(i);
        if((charcode >= 65 && charcode <= 90) || (charcode >= 97 && charcode <= 122)){
            charcode -= banyakGeser(key[j]);
            if(charcode > 122){
                charcode += 26;
            }
            else if(charcode < 97){
                charcode += 26;
            }
            j++;
            if(j == key.length){
                j = 0;
            }
        }
        result += String.fromCharCode(charcode);
    }
    res.status(200).json({
        ciphertext : result,
    });
});

module.exports = router;