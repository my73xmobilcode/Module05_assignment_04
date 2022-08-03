// IMPORT THE MODULE
import { helloWorld, funCalc } from "./modules/calculator.js";

let numA=0, numB=0, typeOper=''

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
function collectData(){
    numA = parseInt(prompt('Please entry number: '))    
    numB = parseInt(prompt('Please entry number: '))
    typeOper = prompt('Entry one operation (add, subtract, multiply, and divide): ')

}

function main(){
    let calcAgain = 'y'
    do {
        collectData()
        console.log(numA)
        console.log(numB)
        console.log(typeOper)
        funCalc(typeOper, numA, numB)
        calcAgain = prompt('Continue with calculator? (y/n)')
    } while (calcAgain === 'y')
    window.alert('Thanks for use the basic calculator')
}
    main()