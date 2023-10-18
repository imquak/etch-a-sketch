const box = document.getElementById("box");
console.log(box);



let n = 16;

let currentTool = 'pencil';
let currentColor = "Rgb(0,0,0)";
let isBorder = true;
let isMouseDown = false;
let isMouseHover = false;
let colorPicker = document.querySelector('#color-input').value;

function changeTool(tool){
    currentTool = tool;
    if (currentTool == 'eraser'){
        currentColor = 'white';
    }
}

function changeColor(color){
    console.log("changed color to "+color);
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
function createTiles(n){
    for (let i = 0; i < n; i++){
        const row = document.createElement("div");
        row.className = "row";
        box.appendChild(row);
        for (let i = 0; i < n; i++){
            let square = document.createElement("div");
            square.className = "square";
            addListeners(square);
            row.appendChild(square);
        }
    }
    let squares = document.getElementsByClassName("square");
    box.style.width = (n * 24+"px");
    box.style.height = (n * 24+"px");
}
createTiles(n);