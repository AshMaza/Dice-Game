var randomNumber=Math.floor(Math.random()*6)+1;
var randomImage="images/dice"+randomNumber+".png";
var newPath1= document.querySelectorAll("img")[0];
newPath1.setAttribute("src",randomImage);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2="images/dice"+randomNumber2+".png";
var newPath2=document.querySelectorAll("img")[1];
newPath2.setAttribute("src",randomImage2);

if(randomNumber>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins Hurray!"
}
else if(randomNumber<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins Hurray!"
}
else
{
    document.querySelector("h1").innerHTML="Round Tied !"
}
