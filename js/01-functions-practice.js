//STEP 1
function halfNumber(numValue){
    result = numValue / 2    
    console.log('Half of ' + numValue + ' is ' + result)
    }
halfNumber(5)    
//STEP 2
function squareNumber(numValue){
    result = numValue ** 2
    console.log('The result of squaring the number ' + numValue + ' is ' + result)
}
squareNumber(3)
//STEP 3
function percentOf(numValueA, numValueB){
     result = (numValueA * 100) / numValueB
     console.log(numValueA + ' is ' + result +'% of ' + numValueB)
}
percentOf(2, 4)
//STEP 4
function findModulus(numValueA, numValueB){
        result = numValueB % numValueA
        console.log(result + ' is the modulus of ' + numValueB + ' and ' +  numValueA)
}
findModulus(4, 10)
//STEP 5

let numArray = prompt('Please entry numbers: ')
let total = 0
let newNum = 0
let splitNumb = numArray.split(",")

// console.log(splitNumb)

for (i=0; i < splitNumb.length; i++){
    newNum = Number(splitNumb[i])

    console.log('num = ' + newNum)
    total += newNum
}
console.log('Total is: ' + total)


