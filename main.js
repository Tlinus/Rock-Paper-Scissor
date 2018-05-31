/*
 ROCK PAPER scissor

"rock" = 1
"paper" = 2
"scissor" = 3

localstorage
*/

function getRandom(){
  return Math.floor(Math.random() * (1 - 4) + 4);
}

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('rock').addEventListener('click', function() {
    console.log('rock');

        document.getElementById("YourChoice").style.backgroundImage = "url('images/rock.png')"
    gameOn(1);

  });
  document.getElementById('paper').addEventListener('click', function() {
    console.log('paper');

    document.getElementById("YourChoice").style.backgroundImage = "url('images/paper.png')"
    gameOn(2);
  });
  document.getElementById('scissor').addEventListener('click', function() {
    console.log('scissor');

    document.getElementById("YourChoice").style.backgroundImage = "url('images/scissor.png')"
    gameOn(3);
  });

  scoreJoueur = 0;
  scoreCPU = 0;



});

document.getElementById("YourChoice").style.backgroundRepeat = "no-repeat";
document.getElementById("YourChoice").style.backgroundPosition = "50% 50%";
document.getElementById("ComputerChoice").style.backgroundRepeat = "no-repeat";
document.getElementById("ComputerChoice").style.backgroundPosition = "50% 50%";

function gameOn(choice){


  choiceCPU = getRandom();
  while(choice == choiceCPU){
    choiceCPU = getRandom();
  }

  switch (choiceCPU) {
  case 1:
    document.getElementById("ComputerChoice").style.backgroundImage = "url('images/rock.png')"
    if (choice == 2) {
      UserWin = true;
    }else{
      UserWin = false;
    }
    break;
  case 2:
    document.getElementById("ComputerChoice").style.backgroundImage = "url('images/paper.png')"
    if (choice == 3) {
      UserWin = true;
    }else{
      UserWin = false;
    }
    break;
  case 3:
      document.getElementById("ComputerChoice").style.backgroundImage = "url('images/scissor.png')"
      if (choice == 1) {
        UserWin = true;
      }else{
        UserWin = false;
      }
      break;
  }

  if (UserWin) {
    scoreCPU++;
  }else{
    scoreJoueur++;
  }

  document.getElementById("scoreCPU").innerHTML = scoreCPU;
  document.getElementById("scoreJoueur").innerHTML = scoreJoueur;
}
