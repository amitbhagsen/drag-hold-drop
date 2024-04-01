const fill = document.querySelector('.fill');

const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver); // Changed 'dropover' to 'dragover'
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

function dragStart() {
    this.className += ' hold'; // Added space before 'hold' for proper class name
    setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd () {
    this.className = 'fill';
}

function dragOver (e) {
    e.preventDefault();
}

function dragEnter (e) {
    e.preventDefault();
    this.className += ' hovered'; // Changed 'hovered' to 'hovered' for proper class name
}

function dragLeave () {
    this.className = 'empty';
}

function dragDrop () {
    this.className = 'empty';
    this.append(fill);
}