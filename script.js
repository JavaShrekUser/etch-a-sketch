let mouseColor = '#000000';
let pixleValue = 16;


//making color squares
const draw = document.querySelector('div.draw-container');

function setPaintBoard(){
    for (let index = 0; index < pixleValue; index++) {
        for (let index = 0; index < pixleValue; index++) {
            const e = document.createElement('div');
            e.className='square';
            draw.appendChild(e);
        }    
    }    
}
setPaintBoard();


//change pixel size
function changeSize(){
    const heights = document.querySelectorAll('div.square');
    const widths = document.querySelectorAll('div.square');   

    heights.forEach(heigh => {
        heigh.style.height=`${500/pixleValue-2}px`
    });
    
    widths.forEach(widt => {
        widt.style.width=`${500/pixleValue-2}px`
    });
}
changeSize()


//get color by color pallet
const color = document.querySelector('input.colorpick');
color.addEventListener('input',getColor);

function getColor(e){
    mouseColor = `${e.target.value}`;
}


//clear the board or deleting all divs in paint board container
function freshBoard(){
    const freshs = document.querySelectorAll('div.square');    
    freshs.forEach(fresh => {
    fresh.remove()
    });
}


//using slide bar to get resolution of paint board
const pixels = document.querySelector('input.slider');
pixels.addEventListener('input',setPixel);

function setPixel(e){

    pixleValue = e.target.value;
    freshBoard();    
    setPaintBoard();
    changeSize();
    paint()
}


//pencil or when pointer touch a square, change its color
function paint(){
    const boxes = document.querySelectorAll('.square');
    boxes.forEach(box => {box.addEventListener('mouseenter',changeColor)
    });    
}
paint()

function changeColor(e){
    e.target.style.backgroundColor = mouseColor
}


