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


function checkValid(){

    // checkRows
    for(let r=0; r<row; r++){
        for(let c=0; c<col-2; c++){
            let candy1 = board[r][c];
            let candy2 = board[r][c+1];
            let candy3 = board[r][c+2];
            
            if(candy1.src==candy2.src && candy2.src==candy3.src && ! candy1.src.include("blank")){
                return true;
            }
        }
    }


     // checkColum
     for(let r=0; r<col; r++){
        for(let c=0; c<row-2; c++){
            let candy1 = board[r][c];
            let candy2 = board[r+1][c];
            let candy3 = board[r+2][c];
            
            if(candy1.src==candy2.src && candy2.src==candy3.src && ! candy1.src.include("blank")){
                return true;
            }
        }
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
    let moveRight = g==b+1 && a==e;

    let moveUp = e==a-1 && b==g;
    let moveDown = e==a+1 && b==g;

    let near = moveLeft || moveRight || moveUp || moveDown;

    if(near){
        let candyImg = currTile.src;
        let otherImg = otherTile.src;

        currTile.src = candyImg;
        otherTile.src = candyImg;

        let valedMove = chake
    }
}
