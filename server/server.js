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
// required codes above, below server side calls.
//------------------------------------------------------//

app.post('/operatorAction', (req,res) => {
    console.log('operators made it to server');
    let data = req.body;
    console.log(req.body);
    res.send(req.body);
}
});

app.get('/operationResults', (req,res) => {
    res.send(calculateMath)
})

//------------------------------------------------------//
// required calls above, below server side functions.
//------------------------------------------------------//


let opBtn = data[2].clickedOp;

function calculateMath() {
    switch (opBtn) {
        case '+':
            return $('#num1').val() + ('#num2').val();
            break;
        case '-':
            return $('#num1').val() - ('#num2').val();
            break;
        case '*':
            return $('#num1').val() * ('#num2').val();
            break;
        case '/':
           return  $('#num1').val() / ('#num2').val();
            break;
            
        default:
            break;
    }