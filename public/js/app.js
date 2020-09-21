const mainContainer = document.getElementById("main-container");
let leftPos = 0;
let posX = 0;

mainContainer.addEventListener('mousedown', function(event) {
    leftPos = mainContainer.scrollLeft;
    posX = event.clientX;
    mainContainer.style.userSelect = 'none';
    mainContainer.style.cursor = 'grabbing';
    mainContainer.addEventListener('mousemove', mouseMoveHandler);
    mainContainer.addEventListener('mouseup', mouseUpHandler);
});

mouseMoveHandler = function(event) {
    const changeX = event.clientX - posX;
    mainContainer.scrollLeft = leftPos - changeX;
}

mouseUpHandler = function(event) {
    mainContainer.style.cursor = 'grab';
    mainContainer.removeEventListener('mousemove', mouseMoveHandler);
    mainContainer.removeEventListener('mouseup', mouseUpHandler);
}