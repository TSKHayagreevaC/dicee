// dice image 1
    var randomNumber1 = Math.floor(Math.random() * 6)+1;
    var randomDiceImage1 = "dice"+randomNumber1+".png";
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomDiceImage1);
// dice image 2
    var randomNumber2 = Math.floor(Math.random() * 6)+1;
    var randomDiceImage2 = "dice"+randomNumber2+".png";
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomDiceImage2);
// inner html change according to the winner of the game.
    if ( randomNumber1 > randomNumber2 )
    {document.querySelector("h2").innerHTML = "player 1 is the winner";}
    else if(randomNumber1 < randomNumber2 )
    {document.querySelector("h2").innerHTML = "player 2 is the winner";}
    else if(randomNumber1 === randomNumber2 )
    {document.querySelector("h2").innerHTML = "Game is DRAW";}