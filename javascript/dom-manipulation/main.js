var clickedNum = 0;
var hButton = document.querySelector('.hot-button');
var countClick = document.querySelector('.click-count');

function buttonClicked(event) {
    clickedNum++;
    countClick.textContent = 'Clicks:' + clickedNum;
    if(clickedNum < 4) {
        hButton.className = 'hot-button cold';
    } else if (clickedNum < 7) {
        hButton.className = 'hot-button cool'; 
    } else if (clickedNum < 10) {
        hButton.className = 'hot-button tepid'; 
    } else if (clickedNum < 13) {
        hButton.className = 'hot-button warm'; 
    } else if (clickedNum < 16) {
        hButton.className = 'hot-button hot'; 
    } else {
        hButton.className = 'hot-button nuclear'; 
    }
}

hButton.addEventListener('click', buttonClicked);