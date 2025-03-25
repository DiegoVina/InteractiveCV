const folderElement = document.getElementById('folder');
const postItElement = document.getElementById('post-it');
const paperElement = document.getElementById('paper');
const paper2Element = document.getElementById('paper2');

folderElement.addEventListener('click', function() {
    folderElement.classList.toggle('open');
});

postItElement.addEventListener('click', function(event) {
    event.stopPropagation();
    paperElement.classList.toggle('page');
    paper2Element.classList.toggle('page');
});
