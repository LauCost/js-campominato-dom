//Seleziona il bottone Easy
const easy = document.querySelector(".btn-easy");

//Seleziona il bottone Normal
const normal = document.querySelector(".btn-normal");

//Seleziona il bottone Hard
const hard = document.querySelector(".btn-hard");

//Seleziona il container
const container = document.querySelector(".cont")



//Aggiunge un valore ai quadrati quando si clicca il bottone
easy.addEventListener(`click`, function () {
    container.innerHTML = ``;
    quadrati = 50;
    generaGriglia(quadrati);


})


//Aggiunge un valore ai quadrati quando si clicca il bottone
normal.addEventListener(`click`, function () {
    container.innerHTML = ``;
    quadrati = 82;
    generaGriglia(quadrati);

})


//Aggiunge un valore ai quadrati quando si clicca il bottone
hard.addEventListener(`click`, function () {
    container.innerHTML = ``;
    quadrati = 101;
    generaGriglia(quadrati);

})


//Funzione che genera una griglia in base alla difficoltà scelta e colora i quadrati
function generaGriglia(quadrati) {


    //Crea una costante di bombe in base alla funzione generaBombe()
    const bombs = generaBombe(quadrati)

    console.log(bombs);

    //Genera una griglia in base alla difficoltà scelta
    for (i = 1; i < quadrati; i++) {


        //Crea un elemento div
        const divEl = document.createElement("div");

        //Aggiunge la classe quadrato all'elemento appena creato
        divEl.className = "quadrato"

        //Stampa la griglia nella DOM
        container.append(divEl)

        //Stampa i numeri dei quadrati nella DOM
        divEl.innerHTML += ` ${i} `

        //Funzione che server a colorare un quadrato quando ci si clicca sopra
        divEl.addEventListener(`click`, function () {

            let cellNumber = Number(this.innerHTML)

            //Verifica se il numero della quadrato selezionato è presente tra il numero delle bombe
            for (i = 0; i < bombs.length; i++) {

                //Se il quadrato non è una bomba, la colora di celeste
                if (cellNumber != bombs[i]) {

                    //Aggiunge la classe cyan
                    this.classList.add("cyan");

                    //Se è una bobma, la colora di rosso
                } else {

                    //Aggiunge la classe red
                    this.classList.add("red");
                }

            }

        })
    }

}




//Funzione per generare le bombe
function generaBombe(quadrati) {

    //Crea un stringa vuota
    const bombs = [];

    //Ciclo per creare le bobme ed inserirle nella stringa vuota
    while (bombs.length < 16) {

        //Stinga contenente i numeri random
        const numeroRandom = getRandomNumer(1, quadrati);

        //Un if per verificare se il numero è giò presente o pure no nella stringa vuota
        if (!bombs.includes(numeroRandom)) {

            bombs.push(numeroRandom);
        }
    }
    return bombs
}



//Funzione che genera numeri random
function getRandomNumer(min, max) {

    return Math.round(Math.random() * (max - min)) + min;

}