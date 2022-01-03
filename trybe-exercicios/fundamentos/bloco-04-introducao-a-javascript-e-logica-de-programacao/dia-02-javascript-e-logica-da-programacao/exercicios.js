//exercicios 1 a 7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1
for (let index=0; index<numbers.length; index++){
    console.log(numbers[index]);
}

//2
let soma = 0;

for (let index=0; index<numbers.length; index++){
    soma += numbers[index];
}

console.log(soma)

//3

let media = soma / numbers.length;

console.log(media);

//4
if (media > 20){
    console.log('Valor maior que 20');
}else{
    console.log('Valor menor ou igual a 20');
}

//5
let higherNumber = numbers[0];

for (let index=0; index<numbers.length; index++){
  if (numbers[index] > higherNumber){
      higherNumber = numbers[index];
  }
}

console.log('O maior número é ' + higherNumber);

//6

let impares = 0;

for(let index=0; index<numbers.length; index+=1){
    if(numbers[index] % 2 !== 0){
      impares += 1;   
    }
}

if(impares === 0){
    console.log("Nenhum valor encontrado");
}else{
 console.log('Quantidade de númers ímpares: ' + impares);
}

//7

let lowerNumber = numbers[0];

for (let index=0; index<numbers.length; index++){
  if (numbers[index] < lowerNumber){
      lowerNumber = numbers[index];
  }
}

console.log('O menor número é ' + lowerNumber);

//exercicio 8

numbs = [];

for(let index = 1; index <= 25; index += 1){
    numbs.push(index);
}

console.log(numbs);



for(let index = 0; index < numbs.length; index += 1){
    console.log(numbs[index] / 2);
}
