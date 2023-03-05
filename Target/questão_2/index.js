let numA = 0
let numB = 1
let numC = 0
let numDeterminado= 30
let fibonacci =""

fibonacci += numA +" "+numB

for(let i=0 ; i< numDeterminado; i++){
    numC = numA +numB
    fibonacci += " "+ numC
    numA =numB
    numB=numC
}
if (fibonacci.includes(numDeterminado)) { // verifica se o número informado pertence à sequência
    console.log(numDeterminado + " pertence à sequência de Fibonacci."); // exibe uma mensagem informando que o número pertence à sequência
  } else {
    console.log(numDeterminado + " não pertence à sequência de Fibonacci."); // exibe uma mensagem informando que o número não pertence à sequência
  }


console.log(fibonacci)