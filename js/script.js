// seleziona elemento contenitore
 const gridElement = document.querySelector(".grid");

//  seleziona tasto
const playButton = document.getElementById("play");

// seleziona difficoltà
const difficolta = document.getElementById("difficolta");


const messaggioDiv = document.createElement("div");
messaggioDiv.classList.add("messaggio");





playButton.addEventListener("click", function () {
    gridElement.innerHTML = "";
    let numCelle = 100;
    let difficoltaSelezionata = "cell";
    let numBombe = 16;
    let bombe = [];
    let celleNonBombeCliccate = 0;



    // Logica per determinare la difficoltà selezionata
    if (difficolta.value === "Difficile") {
        numCelle = 49;
        difficoltaSelezionata = "cell-3";
    } else if (difficolta.value === "Medio") {
        numCelle = 81;
        difficoltaSelezionata = "cell-2";
    }

    // Genera 16 numeri casuali (bombe)
    while (bombe.length < numBombe) {
        let bombaCasuale = Math.floor(Math.random() * numCelle) + 1;
        if (!bombe.includes(bombaCasuale)) {
            bombe.push(bombaCasuale);
        }
    }

    console.log(bombe);

    for (let i = 0; i < numCelle; i++) {
        const newElement = createMyElement("div", difficoltaSelezionata);
        newElement.append(i + 1);

        newElement.addEventListener("click", function () {
            // Se la cella è una bomba
            if (bombe.includes(i + 1)) {
                newElement.classList.add("clicked-bomba");

                messaggioDiv.classList.add("messaggio-rosso");
                
                
                messaggioDiv.textContent = "Hai calpestato una bomba! Il tuo punteggio è: " + document.querySelectorAll('.clicked').length;
                document.body.appendChild(messaggioDiv);

            } else {
                newElement.classList.add("clicked");


                newElement.classList.add("clicked");
                // Incrementa il contatore se la cella cliccata non è una bomba
                celleNonBombeCliccate++;

                // Se tutte le celle non bombe sono state cliccate, mostra un messaggio di vittoria
                if (celleNonBombeCliccate === numCelle - numBombe) {
                    messaggioDiv.classList.add("messaggio-verde");
                    messaggioDiv.textContent = "Complimenti! Hai vinto!";
                    document.body.appendChild(messaggioDiv);
                }
               
                
            }
        });

        gridElement.append(newElement);
    }
});




   


//  funzioni

function createMyElement (tagtype , classname) {
    const currentElement = document.createElement(tagtype);
    currentElement.classList.add(classname);
    return currentElement ;
}