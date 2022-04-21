var jelly=["Blue", "Orange", "Green", "Yellow", "Red", "Purple"];
var board=[];
var col=9;
var row=9;

var currTile;
var otherTile;

var score=0;

window.onload=function(){
    startGame();


    window.setInterval(function(){
        scoreJelly();
        generateCandy();
        slideCandy();
        // crushTree();
        // score();
    },100);
    

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
            
            if(candy1.src==candy2.src && candy2.src==candy3.src && ! candy1.src.includes("blank")){
                return true;
            }
        }
    }


     // checkColum
     for(let c=0; c<col; c++){
        for(let r=0; r<row-2; r++){
            let candy1 = board[r][c];
            let candy2 = board[r+1][c];
            let candy3 = board[r+2][c];
            
            if(candy1.src==candy2.src && candy2.src==candy3.src && ! candy1.src.includes("blank")){
                return true;
            }
        }
    }
    return false;
}



//   function

function dragStart(){
    currTile = this;
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
}

function dragLeave(){

}

function dragDrop(){
    otherTile = this;
}


function dragEnd(){
    if(currTile.src.includes("blank") || otherTile.src.includes("blank")){
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

        currTile.src = otherImg;
        otherTile.src = candyImg;

        let validMove = checkValid();

        if(! validMove){
            let candyImg = currTile.src;
            let otherImg = otherTile.src;

            currTile.src = otherImg;
            otherTile.src = candyImg;
        }
    }

    
}



function generateCandy(){
    for (let index = 0; index < col; index++) {
        if(board[0][index].src.includes("blank")){
            board[0][index].src="./assets/images/"+randomCandy()+".png";
        }
        
    }
}

function slideCandy(){
    for (let i = 0; i < col; i++) {
       let n = row-1;
       
       for (let r = col-1; r>=0; r--) {
          if(! board[r][i].src.includes("blank")){
                board[n][i].src = board[r][i].src;
                n-= 1;


          }
           
       }

       for (let r = n; r >= 0; r--) {
            board[r][i].src  = "./assets/images/blank.png";
           
       }
        
    }
}



function crushTree(){
    // checkRows
    for(let r=0; r<row; r++){
        for(let c=0; c<col-2; c++){
            let candy1 = board[r][c];
            let candy2 = board[r][c+1];
            let candy3 = board[r][c+2];
            
            if(candy1.src==candy2.src && candy2.src==candy3.src && ! candy1.src.includes("blank")){
               candy1.src = "./assets/images/blank.png";
               candy2.src = "./assets/images/blank.png";
               candy3.src = "./assets/images/blank.png";

               score+=5;
            }
        }
    }


     // checkColum
     for(let c=0; c<col; c++){
        for(let r=0; r<row-2; r++){
            let candy1 = board[r][c];
            let candy2 = board[r+1][c];
            let candy3 = board[r+2][c];
            
            if(candy1.src==candy2.src && candy2.src==candy3.src && ! candy1.src.includes("blank")){
                candy1.src = "./assets/images/blank.png";
                candy2.src = "./assets/images/blank.png";
                candy3.src = "./assets/images/blank.png";

                score+=5;
            }
        }
    }
}


function scoreJelly(){
    crushTree();
    document.getElementById("score").innerText=score;
}



