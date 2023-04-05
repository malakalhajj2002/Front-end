$(document).ready(function(){
    let loginForm = document.querySelector('.login-form-container');
    $('#create-back-btn').hide();
    $('#close-login-btn').click(function(){
        
        window.history.back();

    });

    $('#create').click(function() {
        $('#create-back-btn').show();
        $('#loginform').hide();
        $('#registerform').removeAttr('hidden');
        $('#loginform').find('input').val('');
        $('.alert').text('Username');
        $('.alertpass').text('Password');
        $('.alertuname').text('Username');
        $('.usename').val('');
    });

    $('#create-back-btn').click(function(){
        $('#registerform').attr('hidden', 'true');
        $('#loginform').show();
        $('#registerform').find('input').val('');
        $('.alert').text('Username');
        $('#create-back-btn').hide();
    });
    
});
