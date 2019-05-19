const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message : 'Handling GET request to cypher'
    });
});

router.get('/:cypher/:angka',(req,res,next) =>{
    var ciphertext = req.params.cypher;
    var angka = parseInt(req.params.angka);
    var result = "";
    var charcode;
    for(i=0;i<ciphertext.length;i++){
        charcode = ciphertext.charCodeAt(i);
        if((charcode >= 65 && charcode <= 90) || (charcode >= 97 && charcode <= 122)){
            charcode += (angka%26);
            if(charcode > 122){
                charcode -= 26;
            }
            else if(charcode > 90 && charcode < 97){
                charcode -= 26;
            }
        }
        result += String.fromCharCode(charcode);
    }
    res.status(200).json({
        ciphertext : result,
    });
});

// router.post('/', (req,  res, next) => {
//     res.status(200).json({
//         message : 'Handling POST request to cypher'
//     });
// });

// router.patch('/:number',(req,res,next) => {
//     const number = req.params.number;
//     res.status(200).json({
//         message : 'Angka berhasil dirubah menjadi ', number
//     });
// });

// router.delete('/:number',(req,res,next) => {
//     const number = req.params.number;
//     res.status(200).json({
//         message : 'Angka terhapus'
//     });
// });


module.exports = router;