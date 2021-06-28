$(document).ready(onReady);

function onReady() {
    console.log('js ready');
    $('.top').on('click', '#addition', addNumbers)
    $('.top').on('click', '#subtraction', subtractNumbers)
    $('.top').on('click', '#multiplication', multiplyNumbers)
    $('.top').on('click', '#division', divideNumbers)
    $('.top').on('click', '#results', runEquation)
    $('.top').on('click', '#delete', clearEquation)
}

let numberOne = '';
let numberTwo = '';
let operatorPicked = '';

function addNumbers(){
    operatorPicked = '+';
}

function subtractNumbers(){
    operatorPicked = '-';
}

function multiplyNumbers(){
    operatorPicked = '*';
}

function divideNumbers(){
    operatorPicked = '/';
}

function clearEquation() {

}

function runEquation() {
    let inputOne = $('#num1').val();
    let inputTwo = $('num2').val()
    
    $.ajax({
            // type
            method: 'POST',
            url: '/createFunction',
            data: {
                inputInfo:
                inputOne,
                inputTwo,
                operatorPicked
            } // data becomes req.body on the server
        }) // good path
        .then(function(response){
            console.log('sent operator', response);
            clearEquations();
            showHistory();
        }) // error path
        .catch(function(response) {
            console.log('operator failed', err);
        })
}

function clearEquation() {

}

function showHistory() {
    
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