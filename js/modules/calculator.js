// ADD A PRIVATE FUNCTION CALLED CALCULATE
// ADD FOUR PUBLIC FUNCTIONS BELOW
// ADD FUNCTION
// SUBTRACT FUNCTION
// MULTIPLY FUNCTION
// DIVIDE FUNCTION
// EXPORT THE FOUR PUBLIC FUNCTIONS


export function helloWorld() {
    console.log('hello world')
}

export function funCalc(typeOper, numA, numB){
    let res = 0
    
    switch (typeOper){
        case 'add':
            res = numA + numB
            window.alert('Sum of values = ' + res)
            break
        case 'substract':
            res = numA - numB
            window.alert('Substrac of values = ' + res)
            break
        case 'multiply':
            res = numA * numB
            window.alert('Multiply of values = ' + res)
            break
        case 'divide':
            res = numA / numB
            window.alert('divide of values = ' + res)
            break
        default:
            window.alert('User select invalid operation, try again please!')
    }
}
