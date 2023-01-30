const container = document.querySelector('.container');
// these are the three buttons that select the size of the grid
const tenByTen = document.querySelector('.ten');
const twentyByTwenty = document.querySelector('.twenty');
const thirtyByThirty = document.querySelector('.thirty');

// function that creates the Etch-a-Sketch grid, tied to all grid-size buttons via event listeners
function createEtchASketch(totalSquares, squareHeight, rows) {
    // clear existing grid
    container.innerHTML = '';
    // create grid based on totalSquares, squareHeight and rows of button picked
    for (let i = 0; i < totalSquares; i++) 
    {
    const div = document.createElement('div');
    // create new 'opacity' style for each div;
    let opacity = 0.0;
    div.style.cssText = `border: 1px solid black; height: ${squareHeight}px; width: ${squareHeight}px; background-color: white`;
    container.style.cssText = `grid-template-columns: repeat(${rows}, ${squareHeight}px [col-start])`;
    // changes color for each separate div 
    div.addEventListener('mouseover', function() {
        opacity += 0.33;
        div.style.backgroundColor = `rgba(0, 255, 0, ${opacity})`;
    })
    container.appendChild(div);
};
}

tenByTen.addEventListener('click', function() {
    createEtchASketch(100, 42, 10)});

twentyByTwenty.addEventListener('click', function() {
    createEtchASketch(400, 21, 20)});
thirtyByThirty.addEventListener('click', function() {
    createEtchASketch(900, 14, 30)});

createEtchASketch(100, 42, 10);

// Add 10x10 divs by default, change numbers if clicked
