const container = document.querySelector('.container');
const tenByTen = document.querySelector('.ten');
const twentyByTwenty = document.querySelector('.twenty');
const thirtyByThirty = document.querySelector('.thirty');

function createEtchASketch(totalSquares, squareHeight, rows) {
    console.log(totalSquares);
    container.innerHTML = '';
    for (let i = 0; i < totalSquares; i++) 
    {
    const div = document.createElement('div');
    let opacity = 0.0;
    div.style.cssText = `border: 1px solid black; height: ${squareHeight}px; width: ${squareHeight}px; background-color: white`;
    container.style.cssText = `grid-template-columns: repeat(${rows}, ${squareHeight}px [col-start])`;
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
