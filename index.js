
function generatePassword() {
    var length = parseInt(document.getElementById('length').value);
    var upperCase = document.getElementById('uppercase').checked;
    var lowerCase = document.getElementById('lowercase').checked;
    var number = document.getElementById('number').checked;
    var symbols = document.getElementById('symbols').checked;


    var characterSet = "";
    if (upperCase) characterSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowerCase) characterSet += 'abcdefghijklmnopqrstuvwxyz';
    if (number) characterSet += '0123456789';
if (symbols) characterSet += '!@#$%^&*()_+-={}[]|:;"?/><.,~`'

var Password = "";
for (var i = 0; i < length; i++) {
    var randomchar = characterSet.charAt(Math.floor(Math.random() * characterSet.length));
Password += randomchar;

}
document.getElementById('password').textContent = Password;

}

document.getElementById('generate').addEventListener('click', generatePassword);