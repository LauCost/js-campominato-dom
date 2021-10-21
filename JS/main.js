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
            let cellNumber = this.innerHTML
            console.log(cellNumber);

            //Aggiunge il colore celeste all'elemento cliccato
            this.style.backgroundColor = "cyan"
        })
    }

}

