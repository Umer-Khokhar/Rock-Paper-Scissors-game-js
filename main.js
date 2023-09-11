import './style.css'

const userChoice = document.getElementById('me');
const comChoice = document.getElementById('computer');
const buttons = document.querySelectorAll('button');
const result = document.getElementById('result');


let choice;
buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    choice = e.target.id;
    userChoice.innerHTML = choice;
    genrateComputerChoice();
    checkWins();
  })
})

function genrateComputerChoice() {
  let randNum = Math.floor(Math.random() * 3) + 1
  console.log(randNum)

  if (randNum === 1) {
    comChoice.innerHTML = "rock";
  } else if (randNum === 2) {
    comChoice.innerHTML = "paper";
  } else if (randNum === 3) {
    comChoice.innerHTML = "scissor";
  }
}

function checkWins() {
  const userChoiceText = userChoice.innerHTML.trim().toLowerCase();
  const comChoiceText = comChoice.innerHTML.trim().toLowerCase();

  if (userChoiceText === comChoiceText) {
    result.innerHTML = "Match is Draw!";
  } else if (userChoiceText === "rock" && comChoiceText === "paper") {
    result.innerHTML = "Computer win the match";
  } else if (userChoiceText === "paper" && comChoiceText === "scissor") {
    result.innerHTML = "Computer wins the match";
  } else if (userChoiceText === "scissor" && comChoiceText === "rock") {
    result.innerHTML = "Computer wins the match";
  } else  {
    result.innerHTML = "Congratulation! 🎉 You have won the match";
  }
}
