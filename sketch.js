//Create variables here
var dog , dogimage , doghappyimage;
var database;
var foodStock,foodS;
function preload()
{
  //load images here
  dogimage = loadImage("images/dogImg.png")
  doghappyimage = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(800,700);
  
  database = firebase.database();


  foodStock = database.ref('Food').on("value",readstock)
 
    


 
}


function draw() {  
background(46,139,87)
dog = createSprite(400,350,50,50);
dog.addImage(dogimage);

text("use up arrow to feed milk or meat ",33,50);
textSize(30);


if(keyWentDown(UP_ARROW)){
writeStock(foodS)
dog.addImage(doghappyimage)
}
  drawSprites();
  //add styles here

}

function readstock(data){

  foodS = data.val();
}
function writeStock(x){



  if(x<=0){
    x=0;
  }else{

    x = x-1;
  }
  database.ref('Food').update({

  Food:x
})


}

