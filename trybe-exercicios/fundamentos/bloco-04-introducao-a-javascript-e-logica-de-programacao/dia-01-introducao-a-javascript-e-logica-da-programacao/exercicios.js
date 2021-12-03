// exercicio 1

// let a = 5;
// let b = 2;

// console.log (a + b);
// console.log (a - b);
// console.log (a * b);
// console.log (a / b);
// console.log (a % b);

//exercicio 2

// let a = 10;
// let b = 20;

// if(a > b){
//     console.log(a)
// } else {
//     console.log(b);
// }

//exercicio 3

// let a = 50;
// let b = 20;
// let c = 30;

// if (a > b && a > c){
//     console.log('O maior número é: ' + a + ' (a)');
// }else if (b > a && b > c){
//     console.log('O maior número é: ' + b + ' (b)');
// }else if(c > a && c > b){
//     console.log('O maior número é: ' + c + ' (c)');
// }

//exercicio 4

// const number = 13;

// if (number > 0){
//     console.log('positive');
// } else if (number < 0){
//     console.log('negative');
// }else {
//     console.log('zero')
// }

//exercicio 5

// let v1 = 80;
// let v2 = -60;
// let v3 = 60;

// let somaAngulos = v1 + v2 + v3;

// let angulospositivos = v1 > 0 && v2 > 0 && v3 > 0;


// if(angulospositivos){
//     if (somaAngulos === 180){
//         console.log(true);
//     }else {
//         console.log(false);
//     }
// }else {
//     console.log('Erro: ângulo inválido')
// }

//exercicio 6

// let chessPiece = 'ToweR';

// switch (chessPiece.toLowerCase()) {
//     case "queen":
//         console.log(chessPiece + " diagonal, vertical e horizontal");
//         break;
    
//     case "bishop":
//         console.log(chessPiece + " diagonal em sua cor de origem");
//         break;

//     case "tower":
//         console.log(chessPiece + " horizontal e vertical");
//         break;

//     default:
//         console.log(chessPiece + " Erro, chessPiece not found")
// }

// exercicio 7


// let note = 42;

// if(note < 0 || note > 100) {
//     console.log('Erro, nota inválida!');
// }else if(note >= 90){
//     console.log('Aluno com nota A');
// }else if(note >= 80) {
//     console.log('Aluno com nota B');
// }else if(note >= 70) {
//     console.log('Aluno com nota C');
// }else if(note >= 60) {
//     console.log('Aluno com nota D');
// }else if(note >= 50) {
//     console.log('Aluno com nota E');
// }else if(note < 50) {
//     console.log('Aluno com nota F');
// }

//exercicio 8

// let n1 = 15;
// let n2 = 12;
// let n3 = 23;

// if ( n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0){
//     console.log(true);
// }else{
//     console.log(false);
// }


//exercicio 9

// let n1 = 10;
// let n2 = 11;
// let n3 = 2;

// if ((n1 % 2 !== 0 || n2 % 2 !== 0 || n3 % 2 !== 0)) {
//     console.log(true);
// }else {
//     console.log(false);
// }

//exercicio 10

// const custoProduto = 100;
// const valorVenda = 10;

// let custoTotal = (custoProduto + (custoProduto*0.2));
// let unidades = 1000;
// let lucro = (valorVenda - custoTotal) * unidades;

// if (lucro > 0){ 
//     console.log("O lucro se é R$"+lucro);
// }else{
//     console.log('Erro, lucro menor do que zero');
// }

//exercicio 11

let salarioBruto = 10000.00;
let inss;
let ir;

if(salarioBruto < 1556.94){
  inss = salarioBruto * 0.08;
}else if(salarioBruto >= 1556.94 && salarioBruto <= 2594.92){
  inss = salarioBruto * 0.09;
}else if(salarioBruto > 2594.93 && salarioBruto <= 5189.82){
  inss = salarioBruto * 0.11;
}else if(salarioBruto > 5189.82){
  inss = 570.88;
}

let salarioPosInss = salarioBruto - inss;

  if(salarioPosInss < 1903.98){
    ir = 0
  }else if(salarioPosInss  >= 1903.98 && salarioPosInss  <= 2826.65){
    ir = (salarioPosInss * 0.075) - 142.80 ;
  }else if(salarioPosInss > 2826.66 && salarioPosInss  <= 3751.05){
    ir = (salarioPosInss  * 0.15) - 354.80;
  }else if(salarioPosInss > 3751.06 && salarioPosInss  <= 4664.68){
    ir = (salarioPosInss  * 0.225) - 636.13;
  }else if(salarioPosInss  > 4664.68){
    ir = (salarioPosInss  * 0.275) - 869.36;
  }
  
  let salarioLiquido = salarioBruto - inss - ir;

  console.log('Valor do salário Bruto R$'+ salarioBruto);
  console.log('Valor da alíquota do INSS R$'+ inss);
  console.log('Valor do salário pós desconto INSS  R$'+ salarioPosInss)
  console.log('Valor da alíquota do IR R$'+ ir);
  console.log('Valor do salário Líquido  R$'+ salarioLiquido);

  