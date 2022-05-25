const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const resultMsg = document.querySelector('#result')
const resultHeading = document.querySelector('#resultHeading')



let result = 0
let hitPosition
let currentTime = 30
let timerId = null
let countDownTimerId = setInterval(countDown, 1000)

function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
        
    })

    let randomSquare= squares[Math.floor(Math.random() * 9) ]
    randomSquare.classList.add('mole')  //<div class="square mole" id="1"></div>

    hitPosition = randomSquare.id

    console.log(randomSquare)
    console.log(Math.floor(Math.random() * 9))
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition){
            result++
            score.textContent = result
            hitPosition = null
            square.classList.add('hitEffect')
        }
        
    })
    square.addEventListener('mouseup', () => { //removes hit effect
        square.classList.remove('hitEffect')
    })
    
})

function moveMole(){
    
    timerId = setInterval(randomSquare, 500)
    
}


function countDown(){
    currentTime--
    timeLeft.textContent = currentTime + " seconds"

    if (currentTime == 0){
        clearInterval(countDownTimerId) // clears countdown timer so time left is 0
        clearInterval(timerId) // clears timerId so mole stops moving
        resultHeading.innerHTML = 'Result:'
        resultMsg.innerHTML = 'GAME OVER ! Your final score is: ' + result
    }
}

moveMole()