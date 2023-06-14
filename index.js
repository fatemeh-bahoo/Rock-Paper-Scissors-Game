var randomNumber1 = Math.floor(Math.random() * 3) + 1;
var randomImage1 = "rock-paper-scissors-" + randomNumber1 + ".png";
var imageSource = "images/" + randomImage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , imageSource);

var randomNumber2 = Math.floor(Math.random()* 3) + 1;
var randomImage2 = "rock-paper-scissors-" + randomNumber2 + ".png";
var imageSource2 = "images/" + randomImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , imageSource2);

if (randomNumber1 === 1 && randomNumber2 === 3 || randomNumber1 === 2 && randomNumber2 === 1 || randomNumber1 === 3 && randomNumber2 === 2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if (randomNumber1 === 3 && randomNumber2 === 1 || randomNumber1 === 2 && randomNumber2 === 3 || randomNumber1 === 1 && randomNumber2 === 2) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
 else if (randomNumber1 === randomNumber2)
    document.querySelector("h1").innerHTML = "Equal!";
