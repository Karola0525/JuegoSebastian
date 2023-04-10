var j1,j2,j3,j4
var generador, playerCount



function preload() {
    
  
}

function setup() {
createCanvas(windowWidth,windowHeight);

database = firebase.database();

    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });

j1= createSprite(50,160,30,30);
j2= createSprite(windowWidth-80,160,30,30);
j3= createSprite(50,windowHeight-190,30,30);
j4= createSprite(windowWidth-80,windowHeight-190,30,30);
rey=createSprite(windowWidth/2-25,windowHeight/2-25,50,50)
    
}

function draw() {
    if(playerCount != undefined && playerCount <4){
        for(let i=0;i<1;i++){
            player = new Player();
            playerCount += 1;
            player.positionX = 50;
            player.positionY = 160;
            //player.name = this.input.value();
            player.index = playerCount;
            player.addPlayer();//aaa
            player.updateCount(playerCount); // BP
        }
    }

    background(220);
    drawSprites();
}