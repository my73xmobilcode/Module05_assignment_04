//The Rock = 0, Paper =1, Scissors=2

let userInput = prompt('Select Rock, Paper, Scissors: ')
let compValue, userValue, userSel
let compSel = Math.floor(Math.random() * 3)

userSel = userInput.toLowerCase()
switch (compSel){
    case 0:
        compValue = 'rock'
    break
    case 1:
        compValue = 'paper'
    break
    case 2:
        compValue = 'scissors'
    break            
}

if (userSel === 'rock' || userSel === 'paper' || userSel === 'scissors' ){
    userValue = userSel
} else {
    window.alert('User value is invalid, please try again: ' + userSel)
}


if (userValue === compValue){
    window.alert('Result is a tie between User and Computer to: ' + userValue)

} else {
    if ( userValue === 'rock' && compValue !== 'rock') {
        window.alert('User\'s choice Win: ' + userValue )
    }
    if (userValue === 'scissors' && compValue === 'paper' ){
        window.alert('User\'s choice Win: ' + userValue )
    }
    if (compValue === 'rock' && userValue !== 'rock'){
        window.alert('Computer\'s choice Win: ' + compValue )
    }
    if (compValue === 'scissors' && userValue === 'paper'){
        window.alert('Computer\'s choice Win: ' + compValue )
    }    
}

console.log(compValue)
console.log(userValue)

