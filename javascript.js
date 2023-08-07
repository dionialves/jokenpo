rockHumanPlayer = document.getElementById('rock-human-player');
paperHumanPlayer = document.getElementById('paper-human-player');
scissorsHumanPlayer = document.getElementById('scissors-human-player');
rockComputerPlayer = document.getElementById('rock-computer-player');
paperComputerPlayer = document.getElementById('paper-computer-player');
scissorsComputerPlayer = document.getElementById('scissors-computer-player');

pointsComputerPlayer = document.getElementById('points-computer-player');
pointsHumanPlayer = document.getElementById('points-human-player');
information = document.getElementById('information')

const points = {
    human: 0, 
    computer: 0,
    draw: 0
}

// generates a random move for the computer
const generateComputerDecision = () => {
    options = ['rock', 'paper', 'scissors'];
    decision = options[Math.round(Math.random() * (2 - 0) + 0)];

    return decision;
};

const defineWinner = (humanChoice, computerChoice) => {

    if ((humanChoice === 'rock' && computerChoice === 'scissors') || 
    (humanChoice === 'paper' && computerChoice === 'rock') || 
    (humanChoice === 'scissors' && computerChoice === 'paper')){
        return 'human'
    }else if (humanChoice === computerChoice){
        return 'draw'
    }else{
        return 'computer'
    };
};

const countScore = (result) => {

    points[result] += 1

    // Ajust score
    pointsComputerPlayer.textContent = points['computer']
    pointsHumanPlayer.textContent = points['human']
}

const setOpacity = (element) => {
    element.classList.remove('img-human-player');
    element.classList.add('class-assistant-img-human-player');

    setTimeout(() => {
        element.classList.remove('class-assistant-img-human-player');
        element.classList.add('img-human-player');
      }, 1500);
};

const showMoveOnScreen = (humanChoice, computerChoice) => {

    if(computerChoice === 'rock'){
        setOpacity(rockComputerPlayer)
    }else if (computerChoice === 'paper'){
        setOpacity(paperComputerPlayer)
    }else{
        setOpacity(scissorsComputerPlayer)
    }
    
    if(humanChoice === 'rock'){
        setOpacity(rockHumanPlayer)
    }else if (humanChoice === 'paper'){
        setOpacity(paperHumanPlayer)
    }else{
        setOpacity(scissorsHumanPlayer)
    }
}

const showResultOnScreen = (result) => {
    if(result === 'human'){
        information.textContent = 'Visitante GANHOU!'
    }else if(result === 'computer'){
        information.textContent = 'Dioni Alves GANHOU!'
    }else{
        information.textContent = 'EMPATE'
    }

    setTimeout(() => {
        information.textContent = 'Visitante, escolha sua jogada!'
      }, 1500);

}

const play = (humanChoice) => {
    // sets the computer game 
    computerChoice = generateComputerDecision()

    // Show move on screen
    showMoveOnScreen(humanChoice, computerChoice)

    // Define the winner of the game 
    resultOfTheGame = defineWinner(humanChoice, computerChoice)

    // Scoring the winner
    countScore(resultOfTheGame)

    // show result on screen
    showResultOnScreen(resultOfTheGame)
};

rockHumanPlayer.addEventListener('click', () => play('rock'));
paperHumanPlayer.addEventListener('click', () => play('paper'));
scissorsHumanPlayer.addEventListener('click', () => play('scissors'));
