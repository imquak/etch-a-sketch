const box = document.getElementById("box");
console.log(box);

const slider = document.getElementById("size-range");
const colorArea = document.getElementById("colors");

slider.value = 16;
let n = slider.value;
console.log(n)

slider.onchange = function (){
    console.log(slider.value);
    n = slider.value;
    createTiles();
}



let currentTool = 'pencil';
let currentColor = "Rgb(0,0,0)";
let pencilColor = currentColor;
let isBorder = true;
let isMouseDown = false;
let isMouseHover = false;
let colorPicker = document.querySelector('#color-input');

function addColor(){
    let colorTool = document.createElement('button');
    colorTool.className = "color";
    colorTool.style.backgroundColor = currentColor;
    colorTool.addEventListener("click", function() {
        changeColor(colorTool.style.backgroundColor);
    });
    colorArea.appendChild(colorTool);
}

function update(picker) {
    console.log(picker.toRGBString())
    currentColor = picker.toRGBString();
}

jscolor.trigger('input');

function changeTool(tool){
    if (tool != currentTool){
        currentTool = tool;
        console.log(currentTool);
        if (currentTool == 'pencil'){
            currentColor = pencilColor;
        }
        else if (currentTool == 'eraser'){
            pencilColor = currentColor;
            currentColor = 'white';
        }
        console.log(currentColor)
    }
}

function changeColor(color){
    console.log("changed color to "+color);
    changeTool('pencil');
    currentColor = color;
}
function toggleBorder(){
    console.log(isBorder);
    let squares = document.getElementsByClassName("square");
    Array.from(squares).forEach(element => {
        if (isBorder){
            element.style.borderStyle = 'none';
        }
        else{
            element.style.borderStyle = 'solid';
        }
    });
    isBorder = !isBorder;
}
document.body.onmousedown = function() { 
    isMouseDown = true;
}
document.body.onmouseup = function() {
    isMouseDown = false;
}
function addListeners(obj){
    let oldColor = obj.style.backgroundColor;
    obj.addEventListener("click", function (event) {
        obj.style.backgroundColor = currentColor;
        oldColor = obj.style.backgroundColor;
      }, false);
    obj.addEventListener("mouseleave", function (event) {
        isMouseHover = false
        if (isMouseDown === true){
            obj.style.backgroundColor = currentColor;
            oldColor = obj.style.backgroundColor;
        }
        else{
            obj.style.backgroundColor = oldColor;
        }
      }, false);
    obj.addEventListener("mouseover", function (event) {
        obj.style.backgroundColor = currentColor;
        isMouseHover = true
        if (isMouseDown === true){
            obj.style.backgroundColor = currentColor;
            oldColor = obj.style.backgroundColor;
        }
      }, false);
}
function createTiles(){
    box.textContent = '';
    for (let i = 0; i < n; i++){
        const row = document.createElement("div");
        row.className = "row";
        box.appendChild(row);
        for (let i = 0; i < n; i++){
            let square = document.createElement("div");
            square.className = "square";
            if (n > 16){
                square.style.width = (512/n+"px")
                square.style.height = (512/n+"px")
            }
            addListeners(square);
            row.appendChild(square);
        }
    }
    let squares = document.getElementsByClassName("square");
    if (n > 16){
        box.style.width = (n * (512/n)+"px");
        box.style.height = (n * (512/n)+"px");
    }
    else{
        box.style.width = (n * 32+"px");
        box.style.height = (n * 32+"px");
    }
}
createTiles(n);