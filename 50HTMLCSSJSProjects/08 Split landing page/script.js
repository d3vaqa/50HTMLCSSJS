const leftSplit = document.querySelector('.split.left');
const rightSplit = document.querySelector('.split.right');
const container = document.querySelector('.container');

leftSplit.addEventListener('mouseover', function() {
    container.classList.add('hover-left');
    container.classList.remove('hover-right');
});

// leftSplit.addEventListener('mouseout', function() {
//     container.classList.remove('hover-left');
//     container.classList.add('hover-right'); // Default to hover-right when mouse is out
// });

rightSplit.addEventListener('mouseover', function() {
    container.classList.add('hover-right');
    container.classList.remove('hover-left');
});

// rightSplit.addEventListener('mouseout', function() {
//     container.classList.remove('hover-right');
//     container.classList.add('hover-left'); // Default to hover-left when mouse is out
// });
