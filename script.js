let mouseColor = '#000000';
let pixleValue = 16;
let colorCondition = '';
let penCondition = 'pen'


const checkPen = document.querySelector('button.paint');
checkPen.addEventListener('click',changeToPen);

function changeToPen(){
    penCondition = 'pen';
}


const checkEraser = document.querySelector('button.eraser');
checkEraser.addEventListener('click',changeToEraser);

function changeToEraser(){
    penCondition = 'eraser';
}



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


//Change color function. According to the button value, funtion will change to eraser mode. 
function changeColor(e){
    if(penCondition==='pen'){
        e.target.style.backgroundColor = mouseColor;
    }
    else if (penCondition==='eraser'){
        e.target.style.backgroundColor = 'white';
    }
}


const clearScreen = document.querySelector('button.clear');
clearScreen.addEventListener('click',clear);

//clear the board
function clear(){
    const boxes = document.querySelectorAll('div.square');
    boxes.forEach(box => { box.style.backgroundColor = 'white'       
    });

}



