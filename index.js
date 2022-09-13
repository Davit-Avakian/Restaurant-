const MainDishesContainer = document.querySelector('.Main-Dishes-Container');

const PitasContainer = document.querySelector('.Pitas-Container');
const SaladsContainer = document.querySelector('.Salads-Container');
const LaunchContainer = document.querySelector('.Launch-Container');
const SnacksContainer = document.querySelector('.Snacks-Container');

const categoryButtons = document.querySelectorAll('.Categories-Button');

let prevButton;
let prevContainer;

categoryButtons.forEach(btn => {
    btn.addEventListener('click', categoryButtonEvent);
})

function categoryButtonEvent(e) {
    const containerType = e.target.getAttribute('data-value');

    if(prevButton) {
        prevButton.style.color = '#2a5631';
        prevButton.style.background = '#ffff';
    }

    if(prevContainer) {
        prevContainer.style.display = 'none';
    }

    e.target.style.color = '#ffff';
    e.target.style.background = '#2a5631';

    switch(containerType) {
        case 'pita':
            PitasContainer.style.display = 'flex';
            prevContainer = PitasContainer;
            break;
        case 'salad':
            SaladsContainer.style.display = 'flex';
            prevContainer = SaladsContainer;
            break;
        case 'launch': 
            LaunchContainer.style.display = 'flex';
            prevContainer = LaunchContainer;
            break;
        case 'snack':
            SnacksContainer.style.display = 'flex';
            prevContainer = SnacksContainer;
            break;
    }

    prevButton = e.target;
}