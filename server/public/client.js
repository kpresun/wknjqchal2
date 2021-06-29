$(document).ready(onReady);

function onReady() {
    console.log('js ready');
    // showHistory(); may not need 
    $('.operations').on('click', operatorSelect)
    $('#results').on('click', runEquation)
    clearEquation();
    $('#delete').on('click', clearEquation)
}

let operatorPicked = '';

function operatorSelect() {
    console.log('successfully run operatorSelect', $(this).text());
    operatorPicked = $(this).text();
}


function runEquation() {
    console.log('made it to runEquation');
    $.ajax({
            // type
            method: 'POST',
            url: '/createFunction',
            data: {
                firstNumber: $('#num1').val(),
                secondNumber: $('#num2').val(),
                operator: operatorPicked,
            } // data becomes req.body on the server
        }) // good path
        .then(function(response){
            console.log('sent operator', response);
            clearEquation();
            showAnswer();
        }) // error path
        .catch(function(err) {
            console.log('operator failed', err);
        })
}

function showAnswer() {
    console.log('made it back to client side');
    $.ajax({
        method: 'GET',
        url: '/calculations'
    })
    .then( res => {
        let latestAnswer = res[res.length -1];
        $('#result-area').text(latestAnswer.results);

        $('#history-area').empty();
        for (const computation of res) {
            $('#history-area').append(`
            <p>${computation.firstNumber} ${computation.operator} ${computation.secondNumber} = ${computation.answer}</p>
            `)
        }
    })
    .catch( res => {
        console.log('Get error', res);
    })

}

function clearEquation() {
    $('.form-input').val('');
}







//------------------------OLD----------------------------------//
// function runResults() {
// $.ajax({
//     // type
//     method: 'POST',
//     url: '/operatorAction',
//     data: { 
//         mathInputs: { input1: $('#num1').val(),
//         input2: $('#num2').val(),
//         clickedOp: $('button').click(function(){
//             let chosenBtn = $(this).val(); return chosenBtn;
//         }) }
//     } // data becomes req.body on the server
// }) // good path
// .then(function(response){
//     console.log('sent operator', response);
// }) // error path
// .catch(function(response) {
//     console.log('operator failed', err);
// })

// }

// $.ajax({
//     method: 'GET',
//     url: '/operationResults'
// })
// .then(function(response) {
//     console.log('results made it to server');
// })
// .catch(function(response){
//     console.log('operation failed');
// })