const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.static('server/public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`listening on port; ${PORT}`);
})

//------------------------------------------------------//
// required server codes above, below server side calls.
//------------------------------------------------------//



//------------------------------------------------------//
// required server calls above, below server side functions.
//------------------------------------------------------//



//------------------------------OLD-------------------------------//

// app.get('/operationResults', (req,res) => {
//     res.send(results)
// })

// app.post('/operatorAction', (req,res) => {
//     console.log('operators made it to server');
//     let data = req.body.mathInputs;
//     calculateMath();

// });

// let results = 0;

// function calculateMath(operatorObject) {
//     switch (operatorObject.clickedOp) {
//         case '+':
//             return $('#num1').val() + ('#num2').val();
//             break;
//         case '-':
//             return $('#num1').val() - ('#num2').val();
//             break;
//         case '*':
//             return $('#num1').val() * ('#num2').val();
//             break;
//         case '/':
//            return  $('#num1').val() / ('#num2').val();
//             break;
            
//         default:
//             break;
//     }
//     results.push(operatorObject);

// }