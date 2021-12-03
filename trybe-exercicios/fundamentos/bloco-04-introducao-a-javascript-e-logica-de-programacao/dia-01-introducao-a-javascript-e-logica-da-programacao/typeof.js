// let patientId = 50;
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';

// console.log(typeof (patientId));
// console.log(typeof (isEnrolled));
// console.log(typeof (patientInfo));
// console.log(typeof (patientEmail));
// console.log(typeof (patientAge));



// let base = 5;
// let height = 8;
// let area

// console.log (base*height);

// let perimeter

// console.log (2*(base+height));



// let note = 89;

// if(note >=80){
//   console.log("Parabéns, você foi aprovada(o)")
// }
// else if(note<80 && note>=60){
//   console.log("Você está na nossa lista de espera")
// }
// else{
//   console.log("Você foi reprovado")
// }




// const comida = 'pão na chapa';
// const bebida = 'chá';

// if (bebida === 'cafézinho' && comida === 'pão na chapa'){
//   console.log('Muito obrigado pela refeição :)');
// } else {
//   console.log('Acho que houve um engano com meu pedido');
// }





// const conditionOne = true;
// const conditionTwo = true;

// console.log(conditionOne && conditionTwo);



// const cenouras = true;
// const leite = true;
// const arroz = true;
// const feijao = true;

// const listaDeCompras = cenouras && leite && arroz && feijao;

// console.log(listaDeCompras)



// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false


// let currentHour = 14;
// let message = "";


// if(currentHour >= 22) {
//   message = "Não deveríamos comer nada, é hora de dormir";
// } else if (currentHour >= 18 && currentHour < 22) {
//   message = "Rango da noite, vamos jantar:)";
// } else if (currentHour >= 14 && currentHour < 18) {
//   message = "Vamos fazer um bolo pro café da tarde?";
// } else if (currentHour >= 11 && currentHour < 14) {
//   message = "Hora do almoço!!";
// } else if(currentHour < 11 && currentHour < 4) {
//   message = "Hmmmm, cheiro de café recém passado";
// }

// console.log(message);



// let weekDay = 'quarta-feira';

// if(weekDay === 'sábado' || weekDay === 'domingo') {
//   console.log("FINALMENTE, descanso merecido UwU");
// } else {
//   console.log("Oba, mais um dia de aprendizado na Trybe >:D");
// }


// console.log((2 + 2) === 4);

// console.log(!(2 + 2) === 4);



let status = 'reprovado'

switch (status){
  case "aprovado":
    console.log("Parabéns, aprovado!");
    break;

  case "lista":
    console.log("Você está na lista de espera");
    break;

  case "reprovado":
    console.log("Reprovado, tente mais uma vez");
    break;

  default:
    console.log("não se aplica")
}



