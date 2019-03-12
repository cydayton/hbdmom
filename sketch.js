let img;
let font, fontsize;

function preload(){
img = loadImage('image.jpeg');
font = loadFont('TheLightFont.ttf');
fontsize = 48;

}

function setup(){
    createCanvas(windowWidth, windowHeight);
    textFont(font);
    textSize(fontsize);
    textAlign(CENTER, CENTER);
}

function draw(){
image(img, windowWidth/4, windowHeight/4)
for(let i=0; i<50; i++){
    ellipse(30*i+10, 20+20*sin(i), 20, 20)
    if(mouseX>=30*i+10){
        fill(random(0, 255), random(0, 255), random(0, 255))
    }else{fill(255)}
}
fill(40, 255, 119);
text('Happy Birthday Mom!', windowWidth/2, windowHeight/5)
push();
fill(40, 158, 255)
textSize(32);
text('I love you so much!', 160, 100)
pop();
push();
fill(240, 58, 255)
textSize(28);
text('I hope you have the best day!', 180, 200)
pop();
}
