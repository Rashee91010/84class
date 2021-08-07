canvas = document.getElementById("myCanvas");
ctx = canvas.getContext2d;
imagewidth=300;
imageheight=100;
var image;
imagex=100;
imagey=100;
function add(){
    imgtag=new Image();
    imgtag.onload=upload();
    imgtag.src=image;
}

function upload(){
    ctx.drawImage(imgtag, imagex, imagey, imagewidth, imageheight);
}

window.addEventListener("keydown", mykeydown);

function mykeydown(e){
    keyPressed= e.keyCode;
console.log(keyPressed);

if ((keyPressed >97 && keyPressed <112)|| (keyPressed >65 && keyPressed >90))
{
    alphabetkey();
    document.getElementById("d1").innerHTML="You pressed alphabet key";
    console.log("alphabetkey");
}
if (keyPressed >48 && keyPressed <57)
{
    numberkey();
    document.getElementById("d1").innerHTML="You pressed number key";
    console.log("numberkey");
}
if (keyPressed >37 && keyPressed <40)
{
    arrowkey();
    document.getElementById("d1").innerHTML="You pressed arrow key";
    console.log("arrowkey");
}

}
function alphabetkey(){
    img_image="alphabet.jpg";
    add();
}
function numberkey(){
    img_image="numbers.jpg";
    add();
}
function arrowkey(){
    img_image="arrow.jpg";
    add();
}