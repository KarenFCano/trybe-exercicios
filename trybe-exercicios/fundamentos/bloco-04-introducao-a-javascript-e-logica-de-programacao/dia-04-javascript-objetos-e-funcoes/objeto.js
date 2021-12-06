
// let aluno = {
//     nome: 'karen',
//     sobrenome: 'cano',
//     idade: 32,
//     familia: ['Rafael', 'Thiago'],
//     endereco: {
//         rua: 'comendador pinoti gamba',
//         numero: 566,
//         bairro: 'Vila Mussolini',
//         cidade: 'sbc',
//     }
// };

// console.log('A aluna' + ' ' + aluno.nome + ' ' + 'tem' + ' ' + aluno.idade + ' ' + 'anos');
// console.log('A aluna' + ' ' + aluno['nome'] + ' ' + 'tem' + ' ' + aluno['idade'] + ' ' + 'anos');

// aluno['fullName'] = aluno.nome + ' ' + aluno.sobrenome;

// console.log(aluno.fullName);

// console.table(aluno);


//exercicio 1

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,   
    medals: { 
        golden: 2, 
        silver: 3,
    },
};


console.log('A jogadora ' + player.name + ' tem ' + player.age + ' anos de idade.');

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018],

console.log('A jogadora possui ' + player.medals.golden+ ' de ouro e ' + player.medals.silver + ' medalhas de prata.');