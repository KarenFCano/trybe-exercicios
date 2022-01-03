//exercicio 1

// O fatorial é representado pelo sinal !
// ! = 4 x 3 x 2 x 1 = 24

fatorial = 1;

for (let index = 10; index > 0; index--) {
    fatorial *= index;
}


console.log(fatorial);

//exercicio 2

//inverter a ordem das letras de uma palavra

word = "karen";
newWord = "";

for (let index = word.length - 1; index >= 0; index--) {
    newWord += word[index];
}

console.log(newWord);


//exercicio 3

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maior = "";
let menor = "";

for(let index = 0; index<array.length; index++){
    if(array[index].length > maior.length){
        maior = array[index];
      }else if(array[index].length < maior.length){
        menor = array[index];
      }
}

console.log(maior);
console.log(menor);

//exercicio 4

let biggestPrimeNumber = 0;

for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);