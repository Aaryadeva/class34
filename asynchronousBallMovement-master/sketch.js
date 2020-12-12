var ball;
var database,pos;
function setup(){
    createCanvas(500,500);
    //the game database is the database of firebase
    database=firebase.database()

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballRef = database.ref("ball/position")
    ballRef.on("value",readData)
}

function draw(){
    background("white");
    if(pos!==undefined){
    if(keyDown(LEFT_ARROW)){
        writeData(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeData(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writeData(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writeData(0,+1);
    }
    drawSprites();
}
}

function writeData(x,y){
    database.ref("ball/position").set({
        'x' : pos.x + x,
        'y' : pos.y + y
    })

    
}
function readData(data){
    pos=data.val()
    ball.x=pos.x
    ball.y=pos.y
}

