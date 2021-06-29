const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');

app.use(express.static('server/public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`listening on port; ${PORT}`);
})

//------------------------------------------------------//
// required server codes above, below server side calls.
//------------------------------------------------------//

const results = [];

app.post('/createFunction', (req,res) => {
    console.log('Made it to server side POST', req.body);
    let data = req.body;
    let operator = req.body.operator;
    let answer;
    // Need to add Number to data because they come back as string, need to return to legal numbers
    switch (operator) {
        case '+':
            answer = Number(data.firstNumber) + Number(data.secondNumber);
            break;
        case '-':
            answer = Number(data.firstNumber) - Number(data.secondNumber);
            break;
        case '*':
            answer = Number(data.firstNumber) * Number(data.secondNumber);
            break;
        case '/':
            answer = Number(data.firstNumber) / Number(data.secondNumber);
            break;
            
        default:
            break;
    }
    console.log('The answer is', answer);
    results.push({
        firstNumber: Number(data.firstNumber),
        secondNumber: Number(data.secondNumber),
        operator: operator,
        answer: answer
        });

    console.log(results);

})

app.get('/calculations', (req,res) => {
    res.send(results);
})

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