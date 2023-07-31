/* addEventListerner allows target an element
and allow the element to go through an event based
on the event type 
*/

function handleClick(event) {
    console.log('button clicked');
    console.log(event);
    console.log(event.target);
}

var click = document.querySelector('.click-button');
click.addEventListener('click', handleClick, false);

function handleMouseover(event) {
    console.log('button hovered');
    console.log('event:', event);
    console.log('event target:', event.target);
}

var hover = document.querySelector('.hover-button');
hover.addEventListener('mouseover', handleMouseover);

function handledDblClick(event) {
    console.log('dbl Clicked');
    console.log('event:', event);
    console.log('event target:', event.target);
}

var dbl = document.querySelector('.double-click-button');
dbl.addEventListener('dblclick', handledDblClick);

const text = document.querySelectorAll('.clickTest');
 text.forEach(item => {
    item.addEventListener('click', event => {
      console.log('I clicked!!!')
    })
  })