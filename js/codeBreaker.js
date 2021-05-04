let symbolComputer1;
let symbolComputer2;
let symbolComputer3;
let zahl1;
let zahl2;
let counter;


function changeScreen() {
    counter = parseInt(document.getElementById('runden').value);
    console.log(counter);
    if(counter<1 || isNaN(counter)) {
        
        addPopUp('Gib eine positive Zahl ein!')

    } else {

    screen1.classList.remove('active');
    screen2.classList.add('active');
    symbolComputer1 = (Math.ceil(Math.random() * 9));
    symbolComputer2 = (Math.ceil(Math.random() * 9));
    symbolComputer3 = (Math.ceil(Math.random() * 9));
    console.log(symbolComputer1, symbolComputer2, symbolComputer3);
    
    }
}

function eingabe() {
    newTryContainer.innerHTML='';

    if(counter > 0){
        zahl1 = (document.getElementById('zahl1').value);
        if(zahl1 == symbolComputer1 ) {
            result1(1);
        } else if (zahl1 !=symbolComputer1 && zahl1 != symbolComputer2 && zahl1 != symbolComputer3) {
            result1a(1);
        } else {
            result1b(1);
        };
    
        zahl2 = (document.getElementById('zahl2').value);
        if(zahl2 == symbolComputer2 ) {
            result1(2);
        } else if (zahl2 !=symbolComputer1 && zahl2 != symbolComputer2 && zahl2 != symbolComputer3) {
            result1a(2);
        } else {
            result1b(2);
        };
    
        zahl3 = (document.getElementById('zahl3').value);
        if(zahl3 == symbolComputer3 ) {
            result1(3);
        } else if (zahl3 !=symbolComputer1 && zahl3 != symbolComputer2 && zahl3 != symbolComputer3) {
            result1a(3);
        } else {
            result1b(3);
        };
    
        if(zahl1 == symbolComputer1 && zahl2 == symbolComputer2 && zahl3 == symbolComputer3) {
            addPopUp2();
        }

    } else {
        addPopUp3();
    }
    counter--;
    
}




function newTry() {
    location.reload();
}


function addPopUp(text) {

    let popup = document.createElement('div');
        popup.setAttribute('id', 'popUp');
        let myText = document.createElement('p');
        myText.append('Bitte gib eine positive Zahl ein!');
        popup.append(text);
        let button= document.createElement('div');
        button.classList.add('popUpButton');
        button.addEventListener('click', closePopUp);    

        button.append('OK');
    
        popup.append(button);

        document.getElementById('screen1').append(popup);
}

function closePopUp() {
    popUp.remove();
}

function addPopUp2(text) {

    let popup2 = document.createElement('div');
        popup2.setAttribute('id', 'popUp2');
        let text2 = document.createElement('p');
        text2.append('Gewonnen!');
        popup2.append(text2);
        let button= document.createElement('div');
        button.classList.add('popUpButton');
        button.addEventListener('click', newTry);    

        button.append('Play again');
    
        popup2.append(button);

        document.getElementById('screen2').append(popup2);
}

function addPopUp3(text) {

    let popup3 = document.createElement('div');
        popup3.setAttribute('id', 'popUp2');
        let text3 = document.createElement('p');
        text3.append('Game Over');
        popup3.append(text3);
        let button= document.createElement('div');
        button.classList.add('popUpButton');
        button.addEventListener('click', newTry);    

        button.append('Play again');
    
        popup3.append(button);

        document.getElementById('screen2').append(popup3);
}

function closePopUp() {
    popUp.remove();
}


function result1(zahl) {

    let result1 = document.createElement('div');
        result1.setAttribute('id', 'result1');
        let text = document.createElement('p');
        text.append('Die Zahl an Stelle ' + zahl + ' ist richtig.');
        result1.append(text);

        document.getElementById('newTryContainer').append(result1);
}

function result1a(zahl) {

    let result1 = document.createElement('div');
        result1.setAttribute('id', 'result1a');
        let text = document.createElement('p');
        text.append('Die Zahl an Stelle ' + zahl+ ' ist nicht richtig.');
        result1.append(text);

        document.getElementById('newTryContainer').append(result1);
}

function result1b(zahl) {

    let result1 = document.createElement('div');
        result1.setAttribute('id', 'result1a');
        let text = document.createElement('p');
        text.append('Die Zahl an Stelle ' + zahl + ' ist im Code enthalten.');
        result1.append(text);

        document.getElementById('newTryContainer').append(result1);
}
