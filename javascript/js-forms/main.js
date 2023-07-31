function handleFocus(event) {
    console.log('focus fired');
    console.log(event.target.name);
}

function handleBlur(event) {
    console.log('blur fired');
    console.log(event.target.name);
}

function handleInput(event) {
    console.log(event.target.name, ':' ,event.target.value);
}

var $name = document.querySelector('#user-name');
var $email = document.querySelector('#user-email');
var $text = document.querySelector('textarea');

$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);

$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);

$text.addEventListener('focus', handleFocus);
$text.addEventListener('blur', handleBlur);
$text.addEventListener('input', handleInput);

var $form = document.querySelector('#contact-form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault(); //to prevent reload of the page when submitted
    var storeObj = {};
    for (var i = 0; i < $form.elements.length; i++) {
        storeObj[$form.elements[i].name] = $form.elements[i].value;
    }
    console.log(storeObj);
    $form.reset(); //resets the default to reload again after recording the data
}