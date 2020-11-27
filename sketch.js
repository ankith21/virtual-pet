//Create variables here
var dog,dogImg,happydog,database,food,foodstock;
function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png");
  happydog=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;

  foodstock=database.ref('Food');
  foodstock.on("value",readstock);
  
}


function draw() {  
  background("blue");


  drawSprites();
  //add styles here
  fill("black");
  text("food remaining "+ food,170,200);

}
function readstock(data){
  food=data.val();
}



