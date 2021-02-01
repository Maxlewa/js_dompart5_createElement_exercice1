// EXO 1

let maDiv = document.querySelector('div#content')

let monH2 = document.createElement('h2');
monH2.innerText = 'Part 6 - Exercice 1';
maDiv.appendChild(monH2);

// EXO 2

let para = document.createElement('p');
para.innerText = 'lorem ipsum lorem ipsum'
maDiv.appendChild(para)

// EXO 3

let monH1 = document.createElement('h1');
monH1.innerText = 'Le DOM - Création de HTML'
maDiv.appendChild(monH1)
maDiv.insertBefore(monH1, maDiv.firstChild)

// EXO 4

let divSecondaire = document.querySelector('#secondaire')


// maDiv.innerHTML = divSecondaire.innerHTML


console.log(maDiv)
console.log(divSecondaire)
