var jelly=["Blue", "Orange", "Green", "Yellow", "Red", "Purple"];
var board=[];
var col=9;
var row=9;

var currTile;
var otherTile;


window.onload=function(){
    startGame();
}


function randomCandy(){
    return jelly[Math.floor(Math.random()*jelly.length)];
}

function startGame(){
    for (let index = 0; index < row; index++) {
       let row=[];
       for (let i = 0; i < col; i++) {
           let tittle=document.createElement("img");
           tittle.id=index.toString()+"-"+i.toString();
           tittle.src="./assets/images/"+randomCandy()+".png";
           

        //    drag function
        tittle.addEventListener("dragstart", dragStart);
        tittle.addEventListener("dragover",dragOver);
        tittle.addEventListener("dragenter",dragEnter);
        tittle.addEventListener("dragleave",dragLeave);
        tittle.addEventListener("drop",dragDrop);
        tittle.addEventListener("dragend", dragEnd);

        document.getElementById("dashBoard").append(tittle);
        row.push(tittle);
       }
       board.push(row);
       console.log(board);

        
    }
}




//   function

function dragStart(){}
function dragOver(){}
function dragEnter(){}
function dragLeave(){}
function dragDrop(){}


function dragEnd(){
    if(currTile.src.include("blank" || otherTile.src.include("blank"))){
            return;
            
    }

    let currCoords=currTile.id.split("-");
    let a=parseInt(currCoords[0]);
    let b=parseInt(currCoords[1]);


    let otherCurrCoords=otherTile.id.split("-");
    let e=parseInt(otherCurrCoords[0]);
    let g=parseInt(otherCurrCoords[1]);

    let moveLeft = g==b-1 && a==e;
    let moveDown = g==b+1 && a==e;
    
}
