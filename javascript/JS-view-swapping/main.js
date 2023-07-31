var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $viewContent = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', handleClick);

function handleClick(event) {
    console.log(event);
    console.log(event.target);
    if (event.target.matches('.tab')) {
        for (var i = 0; i < $tab.length; i++) {
            if(event.target === $tab[i]) {
                $tab[i].className = 'tab active';
            } else {
                $tab[i].className = 'tab';
            }
        }

        var identity = event.target.getAttribute('data-view');
        for (var j = 0; j < $viewContent.length; j++) {
            if($viewContent[j].getAttribute('data-view') !== identity){
                $viewContent[j].className = 'view hidden';
            } else {
                $viewContent[j].className = 'view';
            }
        }
    }
}