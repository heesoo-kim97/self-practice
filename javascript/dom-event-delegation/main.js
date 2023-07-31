var $tasklist = document.querySelector('.task-list');
$tasklist.addEventListener('click', handleClick);

function handleClick(event) {
    console.log(event.target);
    console.log(event.target.tagName);
    if (event.target.tagName === 'BUTTON') {
        var closest = event.target.closest('.task-list-item');
        console.log(closest);
        closest.remove();
    }
}