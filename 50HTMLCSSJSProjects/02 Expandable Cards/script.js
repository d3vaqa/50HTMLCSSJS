document.querySelector('.card-header').addEventListener('click', function() {
    let content = document.querySelector('.card-content');
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
    } else {
        content.classList.add('expanded');
    }
});
