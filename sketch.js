var mouse, mouse_standing, mouse_withoutcheese;
var cat, cat_running, catImage;
var cat_laying;
var garden, gardenImage, invisibleground;

function preload() {
    //load the images here
  
    mouse_standing = loadAnimation ("mouse2.png", "mouse3.png");
    mouse_withoutcheese = loadImage("mouse4.png");

    cat_running = loadAnimation("cat2.png", "cat3.png");
    cat_laying = loadAnimation ("cat1.png", "cat4.png");

    garden = loadImage("garden.png");



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite (50, 180, 200, 600);
    cat.addAnimation ("running", cat_running);
    cat.addAnimation("laying", cat_laying);

    mouse = createSprite(50, 180, 400, 20);
    mouse.addAnimation("standing", mouse_standing);
    mouse.addImage("withoutcheese", mouse_withoutcheese);

    garden.addImage("garden", garden);

    



    


 }

function draw() {

    keyPressed();

    background(255);
    //Write condition here to evalute if tom and jerry collide
 
     if(cat.x - mouse.x < (cat.width - mouse.width)/2){

        mouse.changeAnimation("withoutcheese");
        cat.changeAnimation("laying");
     }
    
     

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode === RIGHT_ARROW) {
   mouse.changeAnimation("standing");
  mouse.frameDelay = 25;
 }

 
 

 }


