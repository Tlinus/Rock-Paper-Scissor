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

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('reset').addEventListener('click', function() {
    scoreJoueur = 0;
    scoreCPU = 0;
    localStorage.setItem('scoreJoueur', 0);
    localStorage.setItem('scoreCPU', 0);
    document.getElementById("CPUScore").innerHTML = scoreCPU;
    document.getElementById("userScore").innerHTML = scoreJoueur;
    sessionStorage.clear();
  });
  document.getElementById('rock').addEventListener('click', function() {
    console.log('rock');

        document.getElementById("YourChoice").innerHTML = '<i class=" bounceInLeft animated far fa-hand-rock"></i>';

    gameOn(1);

  });
  document.getElementById('paper').addEventListener('click', function() {
    console.log('paper');

    document.getElementById("YourChoice").innerHTML  = '<i class=" bounceInLeft animated far fa-hand-paper"></i>'

    gameOn(2);
  });
  document.getElementById('scissor').addEventListener('click', function() {
    console.log('scissor');

    document.getElementById("YourChoice").innerHTML  = '<i class=" bounceInLeft animated far fa-hand-scissors"></i>'

    gameOn(3);
  });


  if (localStorage.getItem('scoreJoueur')) {
    scoreJoueur = localStorage.getItem('scoreJoueur');
  } else {
    scoreJoueur = 0;
  }

  if (localStorage.getItem('scoreCPU')) {
    scoreCPU = localStorage.getItem('scoreCPU');
  } else {
    scoreCPU = 0;
  }
  document.getElementById("CPUScore").innerHTML = scoreCPU;
  document.getElementById("userScore").innerHTML = scoreJoueur;

});


function gameOn(choice){
  document.getElementById("container-choice").style.visibility = "hidden";
  document.getElementById("container-choice").style.height = "0px";
  document.getElementById("container-choice").style.overflow = "hidden";

  document.getElementById("container-game-on").style.visibility = "visible";
  document.getElementById("container-game-on").style.height = "auto";
  document.getElementById("container-game-on").style.overflow = "visible";

  choiceCPU = getRandom();
  while(choice == choiceCPU){
    choiceCPU = getRandom();
  }

  switch (choiceCPU) {
  case 1:
    document.getElementById("CPUChoice").innerHTML = '<i class=" bounceInRight animated far fa-hand-rock"></i>';
    if (choice == 2) {
      UserWin = true;
    }else{
      UserWin = false;
    }
    break;
  case 2:
    document.getElementById("CPUChoice").innerHTML = '<i class="far fa-hand-paper bounceInRight animated "></i>';
    if (choice == 3) {
      UserWin = true;
    }else{
      UserWin = false;
    }
    break;
  case 3:
      document.getElementById("CPUChoice").innerHTML = '<i class="far fa-hand-scissors bounceInRight animated "></i>';
      if (choice == 1) {
        UserWin = true;
      }else{
        UserWin = false;
      }
      break;
  }

  if (!UserWin) {
    scoreCPU++;
    document.getElementById("Result").innerHTML = "You Loose";
  }else{
    scoreJoueur++;
    document.getElementById("Result").innerHTML = "You Win";
  }
  document.getElementById("CPUScore").innerHTML = scoreCPU;
  document.getElementById("userScore").innerHTML = scoreJoueur;

  localStorage.setItem('scoreCPU', scoreCPU);
  localStorage.setItem('scoreJoueur', scoreJoueur);

  setTimeout(function(){
    document.getElementById("Result").style.visibility = "visible";
    document.getElementById("Result").classList.add("animated");
  }, 1000);

  setTimeout(function(){
    document.getElementById("container-game-on").style.visibility = "hidden";
    document.getElementById("container-game-on").style.height = "0px";
    document.getElementById("container-game-on").style.overflow = "hidden";

    document.getElementById("container-choice").style.visibility = "visible";
    document.getElementById("container-choice").style.height = "auto";
    document.getElementById("container-choice").style.overflow = "visible";

    document.getElementById("Result").style.visibility = "hidden";
    document.getElementById("Result").classList.remove("animated");

  }, 3000);




}
