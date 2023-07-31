var $blue = document.querySelector('.blue-button');
var $red= document.querySelector('.red-button');
var $modal = document.querySelector('.survey-container');

function handleBlue(event) {
    $modal.className = '.survey-container';
}

function handleRed(event) {
    $modal.className = '.survey-container hide';
}

$blue.addEventListener('click', handleBlue);
$red.addEventListener('click', handleRed);