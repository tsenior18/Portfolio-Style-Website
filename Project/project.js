// Checks the credentials for the password and username 
$('.button-input').click(function(){
    var username = $('.input').val();
    var password = $('.inputs').val();
    if (username =='tom' && password == 'tom') {
        alert('hello');
    }
    else{
        alert('try again');
    }
})
