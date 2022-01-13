// Acesse o elemento elementoOndeVoceEsta .
let elementoOndeVoceEsta = document.querySelector("#elementoOndeVoceEsta");

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let paiDeOndeEsta = document.querySelector("#elementoOndeVoceEsta").parentElement;
paiDeOndeEsta.style.color = "red";

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerHTML = 'Primeiro Filho do Filho, no caso, filho do Elemento onde você está e neto do primeiro filho!';
console.log(primeiroFilhoDoFilho);

// Acesse o primeiroFilho a partir de pai .
let primeiroFilho = paiDeOndeEsta.firstElementChild;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
let primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;
// elemento anterior

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
let atencao = elementoOndeVoceEsta.nextSibling;

console.log(atencao);

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
let terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
console.log(terceiroFilho)

// Agora acesse o terceiroFilho a partir de pai .
let terceiroFilho2 = paiDeOndeEsta.children[2];

let terceiroFilho3 = paiDeOndeEsta.lastElementChild.previousElementSibling;
console.log(terceiroFilho3);

// ----

// Crie um irmão para elementoOndeVoceEsta .
let quintoFilho = document.createElement('section');
quintoFilho.id = 'quintoFilhoDoPai';
let novoIrmao = paiDeOndeEsta.appendChild(quintoFilho);
console.log(novoIrmao);

// Crie um filho para elementoOndeVoceEsta .
let terceiroFilhoDoOnde = document.createElement('section');
terceiroFilhoDoOnde.id = 'terceiroFilhoDoOnde';
let novoFilhoDoOnde = elementoOndeVoceEsta.appendChild(terceiroFilhoDoOnde);
console.log(novoFilhoDoOnde);


// Crie um filho para primeiroFilhoDoFilho .
let primeiroBisneto = document.createElement('section');
primeiroBisneto.id = 'primeiroBisneto';
let oBisneto = primeiroFilhoDoFilho.appendChild(primeiroBisneto);
console.log(oBisneto);


// A partir desse filho criado, acesse terceiroFilho .
let achandoOTioAvo = oBisneto.parentNode.parentNode.nextElementSibling;
console.log(achandoOTioAvo);

// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

const pai = document.getElementById('pai');

    for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
      const currentChildren = pai.childNodes[index];
      if (currentChildren.id !== 'elementoOndeVoceEsta') {
        currentChildren.remove();
      }
    }

    const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
    segundoEUltimoFilhoDoFilho.remove();

