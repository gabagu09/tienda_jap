var form = document.querySelector('#formSignUp');
var pass = document.getElementById('pass');
var passconf = document.getElementById('passconf');
var submit= document.getElementById('submit');
form.onsubmit = function(e){
    if(pass.value !== passconf.value)
    {
        e.preventDefault();
        pass.value='';
        passconf.value='';
        alert("contraseña  distinta");

    }
}