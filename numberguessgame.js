var playerOne = prompt("Guess a number from 1-6")
  if ((playerOne < 1) || (playerOne > 6)) {
    window.alert("You don't know how to follow directions don't ya?");
}
  else {
    var playerTwo = prompt("Guess a number from 1-6");
    if (playerOne == playerTwo) {
    window.alert("You Win!");
  }
  else {
    window.alert("Player one answer was " + playerOne);
    window.alert("You chose " + playerTwo);
  }
}

//create variable for first person
//number must not exceed six
//warns player for not following directions
//create variable for second person
//number must exceed six
//compares both values
//if player 2 guesses the same as player 1, tell player 2 he/she won
//if the guess is wrong, player 2 loses