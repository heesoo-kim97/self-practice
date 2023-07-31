const currentView = document.querySelector('.current-view');
const nextView = document.querySelector('.next-view');

// Add event listener to the current view
currentView.addEventListener('transitionend', () => {
  // Hide the current view after the transition
  currentView.style.display = 'none';
});

// Trigger the transition
currentView.classList.remove('initial');
currentView.classList.add('final');
nextView.classList.remove('final');
nextView.classList.add('initial');