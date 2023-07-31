var $body = document.querySelector('body');
var $button = document.querySelector('button');

function clickSwitch(event) {
    console.log(event.target);
    if ($body.className === 'on') {
        $body.className = 'off';
        $button.className = 'off';
    } else {
        $body.className = "on";
        $button.className = 'on';
    }
}

$button.addEventListener('click', clickSwitch);
