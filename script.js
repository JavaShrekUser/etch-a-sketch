let mouseColor = '#000000';
const boxes = document.querySelectorAll('.square');
const color = document.querySelector('input');


//get color by color pallet
color.addEventListener('input',getColor);

//when pointer touch a square, change its color
boxes.forEach(box => {box.addEventListener('mouseenter',changeColor)
});



function changeColor(e){
    e.target.style.backgroundColor = mouseColor
}

function getColor(e){
    mouseColor = `${e.target.value}`;
    console.log(this.value)
}

