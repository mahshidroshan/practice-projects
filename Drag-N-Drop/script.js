// 1. Select the element to drag and the elements to drop into
const fill = document.querySelector('.fill'); // The element that will be dragged
const empties = document.querySelectorAll('.empty'); // All possible drop targets

// 2. Add event listeners to the draggable element
fill.addEventListener('dragstart', dragStart); // When dragging starts
fill.addEventListener('dragend', dragEnd); // When dragging ends

// 3. Add event listeners to each drop target
empties.forEach(empty => {
    empty.addEventListener('dragover', dragOver); // When the dragged item is over the target
    empty.addEventListener('dragenter', dragEnter); // When the dragged item enters the target
    empty.addEventListener('dragleave', dragLeave); // When the dragged item leaves the target
    empty.addEventListener('drop', dragDrop); // When the dragged item is dropped
});

// 4. Define what happens when dragging starts
function dragStart() {
    // Add a class to show the element is being dragged
    this.className += ' hold';
    // Make the element invisible after a short delay (so it appears to move smoothly)
    setTimeout(() => this.className = 'invisible', 0);
}

// 5. Define what happens when dragging ends
function dragEnd() {
    // Reset the class to show the element is no longer being dragged
    this.classList = 'fill';
}

// 6. Define what happens when the dragged item is over a drop target
function dragOver(e) {
    e.preventDefault(); // Allow the drop
}

// 7. Define what happens when the dragged item enters a drop target
function dragEnter(e){
    e.preventDefault(); // Allow the drop
    // Add a class to highlight the target
    this.classList.add('hovered');
}

// 8. Define what happens when the dragged item leaves a drop target
function dragLeave() {
    // Remove the highlight from the target
    this.classList.remove('hovered');
}

// 9. Define what happens when the dragged item is dropped
function dragDrop(){
    // Remove the highlight from the target
    this.classList.remove('hovered');
    // Add the dragged item to the drop target
    this.append(fill);
}