let userScore = 0
let compScore = 0
const choices = document.querySelectorAll('.choice')
let msg = document.querySelector("#msg")
let msgContainer = document.querySelector(".msg-container")
let userPoint = document.querySelector("#user-score")
let computerPoint = document.querySelector("#computer-score")
let resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userPoint.innerText = 0;
    computerPoint.innerText = 0;
    msg.innerText = "Play your move"
    msg.style.backgroundColor = 'black'

})

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute('id')
        playGame(userChoice)
    });
});

const drawGame = () => {
    msg.innerText = "Game was drawn"
    msg.style.backgroundColor = 'black'
}

const showWinner = (userWin, userChoice, comChoice) => {
    if (userWin) {
        userPoint.innerText = userScore += 1;
        msg.innerText = `You Won ${userChoice} beats ${comChoice}`
        msg.style.backgroundColor = 'green'
    } else {
        computerPoint.innerText = compScore += 1;
        msg.innerText = `You Lost ${userChoice} beats ${comChoice}`
        msg.style.backgroundColor = 'red'
    }
}

const playGame = (userChoice) => {
    const comChoice = computerChoice()
    if (userChoice === comChoice) {
        drawGame();
    } else {
        userWin = true;
        if (userChoice === 'rock') {
            userWin = comChoice === 'paper' ? false : true
        } else if (userChoice === 'paper') {
            userWin = comChoice === 'scissors' ? false : true
        } else {
            userWin = comChoice === 'rock' ? false : true
        }
        showWinner(userWin, userChoice, comChoice);
    }
}

const computerChoice = () => {
    let options = ['rock', 'paper', 'scissors']
    const indx = Math.floor(Math.random() * 3)
    return options[indx];
}