let mouseColor = '#000000';
let pixleValue = 16;
let penCondition = 'pen';
let isClicked = false;
let isSliding = true;
let isShowing = true;



//-----------------------------------------------------------button animation not done---------------------------------
//Enable `focus` at the beginning : class=color button 
const enable = document.querySelector('button.paint');
enable.classList.add("animated");
//add a click evnebt to enable and call a checkbutton function. If click in input area or drawcontainner, ok, if not remove animation

enable.addEventListener('click',checkButton);
function checkButton(e){
    if (e.target.classList.contains('square')){
        enable.classList.remove('animated');
    }
}
//---------------------------------------------- Button animation not done ---------------------------------


//---------------------------------------------- All buttons ------------------------------------------------------------

//check user selection from button.
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

const checkRandom = document.querySelector('button.random');
checkRandom.addEventListener('click',changeToRandom)
function changeToRandom(){
    penCondition = 'random';
}

//clear the board
const clearScreen = document.querySelector('button.clear');
clearScreen.addEventListener('click',clear);
function clear(){
    const boxes = document.querySelectorAll('div.square');
    boxes.forEach(box => { box.style.backgroundColor = 'white'       
    });
}


//-------------------------------------------- All painting areas --------------------------------------------------------

//making squares for painting
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
        heigh.style.height=`${500/pixleValue}px`
    });
    
    widths.forEach(widt => {
        widt.style.width=`${500/pixleValue}px`
    });
}
changeSize()


//deleting all divs in paint board container
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
    paint();
}


//-------------------------------------------- All painting systems --------------------------------------------------------


//get color by color pallet
const color = document.querySelector('input.colorpick');
color.addEventListener('input',getColor);

function getColor(e){
    mouseColor = `${e.target.value}`;
}


//swich painting method by checkbox
const sliding = document.querySelector(`.switch input[type='checkbox'].cslider`);
sliding.addEventListener('change',changePen);
function changePen(){
    if(sliding.checked){
        isSliding=false;
    }
    else{
        isSliding=true;
    }
}


//Turn on or turn off grid
const showGrid = document.querySelector(`.switch input[type='checkbox'].showGrid`);
showGrid.addEventListener('change',controlGrid);
function controlGrid(){
    const boxes = document.querySelectorAll('.square');
    if(showGrid.checked){
        boxes.forEach(box => {
            box.style.borderColor = 'rgb(47, 47, 47)'
        });
    }
    else{
        boxes.forEach(box => {
            box.style.borderColor = 'transparent'
        });    
    }
}


//check painting method
const container = document.querySelector('.draw-container');

container.addEventListener('mousedown', (e) => {      
    e.preventDefault();
    isClicked = true;
    changeColor(e);
});   

container.addEventListener('mouseup', () => {      
    isClicked = false;
});  

//when mouse is moved out the container, avoiding it continue painting when it move back
container.addEventListener('mouseleave', () => {      
    isClicked = false;
});   

//enable etch a sketch 
container.addEventListener('mouseover', () => {   
    if(isSliding===true){
        isClicked = true;
    }   
});   


//For when rescale the paint board, also recalculate the paint area
function paint(){
    const boxes = document.querySelectorAll('.square');

    boxes.forEach(box => {
        box.addEventListener('mouseover', changeColor);
    });   
}
paint();


//Change color function. According to the button value, funtion will change to eraser mode. 
function changeColor(e){
    if(isClicked === true){
        if(penCondition==='pen'){
            e.target.style.backgroundColor = mouseColor;

        }
        else if (penCondition==='eraser'){
            e.target.style.backgroundColor = 'white';
        }
        else if (penCondition==='random'){
            e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
            
            Math.floor(Math.random() * 256)
            "rgb(155, 102, 102)"
        }
    }
}

//size number, button animation