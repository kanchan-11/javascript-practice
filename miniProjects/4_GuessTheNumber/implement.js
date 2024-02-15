let randomNumber = parseInt(Math.random()*100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame)
{
    submit.addEventListener('click',function(e){
        e.preventDefault()
        if(playGame)
        {
            const guess = parseInt(userInput.value)
            console.log(guess)
            validateGuess(guess)
        }
        else{
            userInput.value=''
            displayMessage('Game Over!')
        }
    })
}

function validateGuess(guess)
{
    if(isNaN(guess))
    {
        alert('Please enter a valid number')
        userInput.value=''
    }
    else if (guess<1)
    {
        alert('Please enter a nubmer greater than 0')
        userInput.value=''
    }
    else if(guess>100)
    {
        alert('Please enter a number less than 100')
        userInput.value=''
    }
    else
    {
        prevGuess.push(guess)
        displayGuess(guess)
        checkGuess(guess)
        if(numGuess>10)
        {
            displayMessage(`Game over! The original number was ${randomNumber}`)
            endGame()
        }
    }
}

function checkGuess(guess)
{
    if(guess===randomNumber)
    {
        displayMessage(`You won! Guessed it right.`)
        endGame()
    }
    else if(guess>randomNumber)
    {
        displayMessage(`The number if TOO high`)
    }
    else if(guess<randomNumber)
    {
        displayMessage(`The number is TOO low`)
    }
}

function displayGuess(guess)
{
    userInput.value=''
    guessSlot.innerHTML += ` ${guess}`
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message)
{
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame()
{
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame()
}
function newGame()
{
    const newGameButton = document.querySelector('#newGame')
    newGameButton.className="button"
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random()*100+1)
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        displayMessage('')
        playGame=true
    })
    
}