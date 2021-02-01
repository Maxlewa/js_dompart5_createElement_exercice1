// EXO 1

let body = document.body

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
maDiv.insertBefore(monH1, monH2)

// EXO 4

let contenuId = maDiv.innerHTML
let divSecondaire = document.querySelector('#secondaire')
divSecondaire.innerHTML = contenuId

divSecondaire.querySelector('h2').innerText = 'Part 6 - Exercice 2'

console.log(maDiv)
console.log(divSecondaire)

// EXO 5

// create div

let idMatiere = document.createElement('div')
idMatiere.setAttribute('id', 'matiere')

// avoir notre div avant le script 

let myScript = document.querySelector('script')
body.insertBefore(idMatiere, myScript)
body.appendChild(idMatiere)

// create list

let myOl = document.createElement('ol')
idMatiere.appendChild(myOl)

let maMatiere = ["html", "css", "javascript"]

maMatiere.forEach(el => {
    let myLi = document.createElement('li')
    myLi.innerText = el
    myOl.appendChild(myLi)
})

