const easy = document.querySelector(".btn-easy");

const normal = document.querySelector(".btn-normal");

const hard = document.querySelector(".btn-hard");

const container = document.querySelector(".cont")

easy.addEventListener(`click`, function () {
    container.innerHTML = ``;
    quadrati = 50;
    generaGriglia(quadrati);


})



normal.addEventListener(`click`, function () {
    container.innerHTML = ``;
    quadrati = 82;
    generaGriglia(quadrati);

})

hard.addEventListener(`click`, function () {
    container.innerHTML = ``;
    quadrati = 101;
    generaGriglia(quadrati);

})

function generaGriglia(quadrati) {

    const bombs = generaBombe(quadrati)

    console.log(bombs);

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
            console.log(cellNumber);

            for (i = 0; i < bombs.length; i++) {
                if (cellNumber == bombs[i]) {

                    //Se è tra quelle autorizzate impostiamo l'accesso a true
                    this.style.backgroundColor = "red"
                } else {
                    this.style.backgroundColor = "cyan"
                }
            }


            //Aggiunge il colore celeste all'elemento cliccato

        })
    }

}





function generaBombe(quadrati) {

    const bombs = [];

    while (bombs.length < 16) {

        const numeroRandom = getRandomNumer(1, quadrati);

        if (!bombs.includes(numeroRandom)) {

            bombs.push(numeroRandom);
        }
    }
    return bombs
}




function getRandomNumer(min, max) {

    return Math.round(Math.random() * (max - min)) + min;

}