const resultTitle = document.querySelector('.result-title')
const scoreHuman = document.querySelector('.score-human')
const scoreMachine = document.querySelector('.score-machine')
const handButton = document.querySelector('.hand-button')
const containerResult = document.querySelector('.container-result')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = humanChoice => {

    

    const machinePlayChoice = playMachine()

    

    // ANIMAÇÃO
    const handMachine = document.querySelector('.hand-machine')
    const handHuman = document.querySelector('.hand-human')


    function animateSwap() {
        handMachine.setAttribute('src', './assets/img/ai-arm/ai-arm-down.png')
        handHuman.setAttribute('src', './assets/img/human-arm/human-arm-down.png')

        setTimeout(() =>  {
        handMachine.setAttribute('src', './assets/img/ai-arm/ai-arm-up.png')
        handHuman.setAttribute('src', './assets/img/human-arm/human-arm-up.png')
        }, 200);
    }

    function repeatAnimation(totalRepetitions, interval) {
        let repetitions  = 0

        function runAnimation() {
         animateSwap()
         repetitions++   

         if (repetitions  < totalRepetitions) {
            setTimeout(runAnimation, interval)
         }
        }
        runAnimation ();
    }

    repeatAnimation(3, 600)

    setTimeout( () => {
        handMachine.setAttribute(
            'src',
            `./assets/img/ai-arm/ai-arm-${machinePlayChoice}.png`)

        handHuman.setAttribute(
            'src', 
            `./assets/img/human-arm/human-arm-${humanChoice}.png `)    
        
    },1500)

    setTimeout ( () => {
        playTheGame(humanChoice, machinePlayChoice)
    },1000)


    setTimeout ( () => {
        handButton.style.display = 'none'
    },1500)

    setTimeout ( () => {
        containerResult.style.display = 'flex'
    },1500)
   
    
}

const playMachine = () => {
    const machineChoice = ['rock','scissors','paper']

    const randomNumber = Math.floor(Math.random() * 3) 

    return machineChoice[randomNumber]

}

const playTheGame = (human, machine) => {

    if (human === machine) {
        resultTitle.innerHTML = 'Deu empate!'
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++
        setTimeout ( () => {
            scoreHuman.innerHTML = humanScoreNumber
        },1500) 
        resultTitle.innerHTML = 'Você ganhou!'
    } else {
        machineScoreNumber++
        setTimeout ( () => {
            scoreMachine.innerHTML = machineScoreNumber
        },1500) 
        
        resultTitle.innerHTML = 'Você  perdeu!'
    }

    console.log('Humano: ' + human + ' Maquina: ' + machine)

}

const nextRound = () => {
    handButton.style.display = 'flex'
    containerResult.style.display = 'none'
}

const restartScore = () => {
    handButton.style.display = 'flex'
    containerResult.style.display = 'none'

    scoreHuman.innerHTML = 0
    scoreMachine.innerHTML = 0
    humanScoreNumber = 0
    machineScoreNumber = 0
}




