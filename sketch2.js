var fondo, Layle,fondoImg,LayleImg;
var pasoIzquierdo,pasoIzquierdoImg,pasoDerecho,pasoDerechoImg,pasoAbajo,pasoAbajoImg,pasoArriba,pasoArribaImg;
var suelo,sueloImg;
var fIImg,fDImg,fAImg,fABImg;

function preload(){
LayleImg = loadImage("Layle.png");
fIImg = loadImage("flechaIzquierda.png");
fDImg = loadImage("FlechaDerecha.png");
fAImg = loadImage("FlechaArriba.png");
fABImg = loadImage("FlechaAbajo.png");

}

function setup(){
 fondo = createSprite(750,360,1500,800);
Layle = createSprite(500,500,50,70);
Layle.addImage("Layle",LayleImg);
Layle.scale = 0.3;
}

function draw(){
createCanvas(1500,720);
if(keyDown("LEFT_ARROW")){
Layle.x -= 5;

}

if(keyDown("RIGHT_ARROW")){
    Layle.x += 5;
    
    
    }

    if(keyDown("UP_ARROW")){
        Layle.y -= 5;
        
        }
        
        if(keyDown("DOWN_ARROW")){
            Layle.y += 5;
            
            
            }

pasoAbajo();
pasoArriba();
pasoDerecho();
PasoIzquierdo();
drawSprites();


}

function PasoIzquierdo(){
if(frameCount%40===0){

var fI = createSprite(80,20,10,10);
fI.addImage("flechaIzquierda",fIImg);
fI.scale = 0.03;
fI.velocityY = 2;
fI.lifetime = 700;

}
}

function pasoDerecho(){
    if(frameCount%40===0){
        var fD = createSprite(150,20,10,10);
        fD.addImage("flechaDerecha",fDImg);
        fD.scale = 0.03;
        fD.velocityY = 2;
        fD.lifetime = 700;
        
        }   
}

function pasoArriba(){
    if(frameCount%40===0){
        var fA = createSprite(220,20,10,10);
        fA.addImage("flechaArriba",fAImg);
        fA.scale = 0.06;
        fA.velocityY = 2;
        fA.lifetime = 700;
            
        }   
}

function pasoAbajo(){
    if(frameCount%40===0){
        var fAB = createSprite(290,20,10,10);
        fAB.addImage("flechaAbajo",fABImg);
        fAB.scale = 0.06;
        fAB.velocityY = 2;
        fAB.lifetime = 700;
            
        }   
}



