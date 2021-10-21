const easy = document.querySelector(".btn-easy");

const normal = document.querySelector(".btn-normal");

const hard = document.querySelector(".btn-hard");

const container = document.querySelector(".cont")


easy.addEventListener(`click`, function () {
    container.innerHTML = ``;
    quadrati = 50;

    for (i = 1; i < quadrati; i++) {

        //Crea un elemento div
        const divEl = document.createElement("div");

        //Aggiunge la classe quadrato all'elemento appena creato
        divEl.className = "quadrato"

        //Stampa la griglia nella DOM
        container.append(divEl)

        //Stampa i numeri dei quadrati nella DOM
        divEl.innerHTML += `<p class="numero"> ${i} </p>`

        //Funzione che server a colorare un quadrato quando ci si clicca sopra
        divEl.addEventListener(`click`, function () {

            //Aggiunge il colore celeste all'elemento cliccato
            this.style.backgroundColor = "cyan"
        })
    }
})

normal.addEventListener(`click`, function () {
    container.innerHTML = ``;
    quadrati = 82;

    for (i = 1; i < quadrati; i++) {

        //Crea un elemento div
        const divEl = document.createElement("div");

        //Aggiunge la classe quadrato all'elemento appena creato
        divEl.className = "quadrato"

        //Stampa la griglia nella DOM
        container.append(divEl)

        //Stampa i numeri dei quadrati nella DOM
        divEl.innerHTML += `<p class="numero"> ${i} </p>`

        //Funzione che server a colorare un quadrato quando ci si clicca sopra
        divEl.addEventListener(`click`, function () {

            //Aggiunge il colore celeste all'elemento cliccato
            this.style.backgroundColor = "cyan"
        })
    }
})

hard.addEventListener(`click`, function () {
    container.innerHTML = ``;
    quadrati = 101;

    for (i = 1; i < quadrati; i++) {

        //Crea un elemento div
        const divEl = document.createElement("div");

        //Aggiunge la classe quadrato all'elemento appena creato
        divEl.className = "quadrato"

        //Stampa la griglia nella DOM
        container.append(divEl)

        //Stampa i numeri dei quadrati nella DOM
        divEl.innerHTML += `<p class="numero"> ${i} </p>`

        //Funzione che server a colorare un quadrato quando ci si clicca sopra
        divEl.addEventListener(`click`, function () {

            //Aggiunge il colore celeste all'elemento cliccato
            this.style.backgroundColor = "cyan"
        })
    }
})



