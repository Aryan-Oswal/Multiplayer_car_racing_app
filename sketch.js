var ball;
var database;
var dataRef;
var position;

function setup() {
    
    database = firebase.database();

    dataRef = database.ref('position')

    dataRef.on('value' , getValue , catchErr)





    createCanvas(500,500);
    ball = createSprite(250,250,50,50);
    ball.shapeColor = "red";
}


function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x, y) {
    
    if(position != undefined){ 
    database.ref('position').set({
        x: position.x + x,
        y: position.y + y,


    })
    }
    
}

function getValue(value) {
    position = value.val()

    ball.x = position.x;
    ball.y = position.y;


    
}

function catchErr() {
    console.log('Err!!!!!!!!!!!!!!')
}
