const box = document.getElementById("box");
console.log(box);

let n = 16;
box.style.width,box.style.height = n * 16;

let currentColor = "Rgb(0,0,0)";

let isMouseDown = false;
let isMouseHover = false;

document.body.onmousedown = function() { 
    console.log("MOUSE DOWN");
    isMouseDown = true;
}
document.body.onmouseup = function() {
    console.log("MOUSE UP");
    isMouseDown = false;
}
function addListeners(obj){
    obj.addEventListener("mouseleave", function (event) {
        isMouseHover = false
        if (isMouseDown === true){
            obj.style.backgroundColor = currentColor;
        }
      }, false);
      
    obj.addEventListener("mouseover", function (event) {
        isMouseHover = true
        if (isMouseDown === true){
            obj.style.backgroundColor = currentColor;
        }
      }, false);
}
function createTiles(n){
    for (let i = 0; i < n; i++){
        const row = document.createElement("div");
        row.className = "row";
        box.appendChild(row);
        for (let i = 0; i < n; i++){
            const square = document.createElement("div");
            square.className = "square";
            addListeners(square);
            row.appendChild(square);
        }
    }
}

createTiles(n);