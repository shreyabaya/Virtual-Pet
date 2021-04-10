//Create variables here
var dogimg, happyDogimg, database, foodS, foodStock, dog, happyDog;

function preload()
{
	dogimg = loadImage("images/dogImg.png")
  happyDogimg = loadImage("images/dog1.png")
}

function setup() {
	createCanvas(500, 500);
dog = createSprite(250,250,20,20)
dog.addImage(dogimg)
 
foodStock = database.ref('Food');
foodStock.on("value,readStock");



}

function readStock(data){
  foodS = data.val();
}
  
function writeStock(x){
  database.ref('/').update({
    
  }

  )
}
function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
writeStock(foodS)
dog.addImage(dogHappy)
}
  drawSprites();
  //add styles here
 textSize()
 fill(black)
 stroke(white)
}


