$(document).ready(onReady);

function onReady() {
    console.log('js ready');
    $('.top').on('click', '.results', function(){
        operatorSwitch();
    })

}

function operatorSwitch() {
$.ajax({
    // type
    method: 'POST',
    url: '/operatorAction',
    data: {
        input1: $('#num1').val(),
        input2: $('#num2').val(),
        clickedOp: $('button').click(function(){
            let chosenBtn = $(this).val();
            return chosenBtn;
        })
    } // data becomes req.body on the server
}) // good path
.then(function(response){
    console.log('sent operator', response);
}) // error path
.catch(function(response) {
    console.log('operator failed', err);
})

}

$.ajax({
    method: 'GET',
    url: '/operationResults'
})
.then(function(response) {
    console.log('results made it back');
})
.catch(function(response){
    console.log('operation failed');
})