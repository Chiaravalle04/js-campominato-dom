// funzione ciclo
function myCicle (val1, val2, val3) {

    gridContainer.innerHTML = '';

    bomb.length = 0;

    for (let i = val1; i <= val2; i++) {

        const myCell = document.createElement('div');
    
        myCell.classList.add(val3);
    
        const myElement = document.createElement('span');
    
        myElement.classList.add('none');
    
        myCell.append(myElement);
    
        // myElement.append(i);
    
        gridContainer.append(myCell);
    
        myCell.addEventListener('click',
    
            function () {

                if (bomb.includes(i)) {

                    myCell.classList.add('bomb');

                } else {

                    myCell.classList.add('cell-color');

                }
                
                myElement.classList.toggle('none');
    
                console.log(i);
    
            }
    
        );
    
    };

};

//funzione random number
function randomNumber (min ,max) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min;

};

function myRandomNumberBomb (num1, num2, myArray) {

    for (let i = 1; i <= 16; i++) {

        let myRandomNumber = randomNumber (num1 ,num2);
    
        while (bomb.includes(myRandomNumber)) {
    
            myRandomNumber = randomNumber (num1 ,num2);
    
        };
    
        myArray.push(myRandomNumber);
    
        console.log(myRandomNumber)
    
    };

};

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

// creazione celle
playButton.addEventListener('click',

    function () {

        gridContainer.classList.add('flex');

        intro.classList.add('none');

        let difficulty = mySelect.value; 

        if (difficulty == 'easy') {

            myCicle(1, 100, easy);

            myRandomNumberBomb(1, 100, bomb);

        } else if (difficulty == 'medium') {

            myCicle(1, 81, medium);

            myRandomNumberBomb(1, 81, bomb);
            
        } else {

            myCicle(1, 49, hard);

            myRandomNumberBomb(1, 49, bomb);

        };

    }

);