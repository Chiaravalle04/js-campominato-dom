//intro
const intro = document.getElementById('p-intro');

//container della griglia
const gridContainer = document.getElementById('grid-container');

gridContainer.classList.add('none');

//selezione difficoltà
const mySelect = document.getElementById('selection');

const easy = 'cell';  // usata come valore (val3) della funzione del ciclo

const medium = 'cell-medium'; // usata come valore (val3) della funzione del ciclo

const hard = 'cell-hard'; // usata come valore (val3) della funzione del ciclo

//bottone per mostrare la griglia
const playButton = document.getElementById('playgame');

// array delle bombe 
const bomb = [];

// verifica per rendere non più cliccabili le celle
let verify = 0

// contenitore dei punti
const containerPoints = document.getElementById('points');

containerPoints.classList.add('none');

// punti
const myPoints = document.getElementById('my-points');

//contatore dei punti 
// let counter = 0

//end game
const endGameCont = document.getElementById('end-game');

endGameCont.classList.add('none');

//punti finali
const finalPoints = document.getElementById('final-points');

//overlay end game
const overlayEndGame = document.getElementById('overlay-endgame');

overlayEndGame.classList.add('none');

// bottone play
playButton.addEventListener('click',

    function () {

        gridContainer.classList.remove('none');

        gridContainer.classList.add('flex');

        intro.classList.add('none');

        containerPoints.classList.remove('none');

        containerPoints.classList.add('block');

        let difficulty = mySelect.value; 

        if (difficulty == 'easy') {

            myCicle(1, 100, easy, 84);

            myRandomNumberBomb(1, 100, bomb);

        } else if (difficulty == 'medium') {

            myCicle(1, 81, medium, 65);

            myRandomNumberBomb(1, 81, bomb);
            
        } else {

            myCicle(1, 49, hard, 33);

            myRandomNumberBomb(1, 49, bomb);

        };

    }

);

// bottone gioca ancora
const playAgain = document.getElementById('play-again');

playAgain.addEventListener('click',

    function () {

        location.reload();

    }

);

/*

----- FUNZIONI ------

*/

// funzione ciclo
function myCicle (val1, val2, val3, val4) {

    gridContainer.innerHTML = '';

    bomb.length = 0;

    // contatore vittoria
    let verifyVictory = 0

    //contatore dei punti 
    let counter = 0;

    myPoints.innerHTML = counter;

    for (let i = val1; i <= val2; i++) {

        const myCell = document.createElement('div');
    
        myCell.classList.add(val3);
    
        const myElement = document.createElement('span');
    
        myElement.classList.add('none');
    
        myCell.append(myElement);
    
        gridContainer.append(myCell);
    
        myCell.addEventListener('click',
    
            function () {

                verifyVictory++;

                if (verify == 0) {

                    if (bomb.includes(i)) {

                        myCell.classList.add('bomb');
    
                        overlayEndGame.classList.remove('none')
    
                        endGameCont.classList.remove('none');
    
                        endGameCont.classList.add('block');
    
                        finalPoints.innerHTML = counter;

                        verify = 1;

                        containerPoints.classList.add('none')
    
                    } else if (!myCell.classList.contains("cell-color")) {
                    
                        myCell.classList.add('cell-color');
    
                        counter++;
    
                        myPoints.innerHTML = counter;

                    } else if (verifyVictory == val4) {

                        alert('Non so come ma Hai vinto, CONGRATULAZIONI!')

                    }
                    
                    myElement.classList.toggle('none');

                }
    
            }

        );        
    
    };

};

//funzione random number
function randomNumber (min ,max) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min;

};

// funzione per generare i 16 numeri
function myRandomNumberBomb (num1, num2, myArray) {

    for (let i = 1; i <= 16; i++) {

        let myRandomNumber = randomNumber (num1 ,num2);
    
        while (myArray.includes(myRandomNumber)) {
    
            myRandomNumber = randomNumber (num1 ,num2);
    
        };
    
        myArray.push(myRandomNumber);
    
    };

};