// Checks the credentials for the password and username 
$('.button-input').click(function(){
    let  username = $('.input').val();
    let  password = $('.inputs').val();
    if (username == 'tom' && password == 'tom') {
        alert('Hello');
        password = '';  // Resets the input sections to empty
        username = '';  // Resets the input sections to empty
    }
    else{
        alert('Details Incorrect');
        password = '';  // Resets the input sections to empty
        username = ''; // Resets the input sections to empty
    }
});


$('.forgot').click(function(){
    alert('Forgot Password?');
});