$(document).ready(onReady);

function onReady() {
    console.log('js ready');
    $('.top').on('click', '.operations', function(){
        operatorSwitch();
    })

}

$.ajax({
    // type
    method: 'POST',
    url: '/operatoraction'
    // if data needs to be an object
    // data: {item: abc, quantity: 123} becomes req.body on the server
})
// good path
.then(function(response){
    console.log('sent operator', response);
})
// error path
.catch(function(response) {
    console.log('operator failed', err);
})