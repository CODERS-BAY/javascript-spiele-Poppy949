let gewinneComputer = 0;
let gewinneSpieler = 0;
let counter;

function changeScreen() {
    counter = parseInt(document.getElementById('runden').value);
    console.log(counter);
    if(counter<1 || isNaN(counter)) {
        
        addPopUp('Bitte gib eine positive Zahl ein!')

    } else {

    screen1.classList.remove('active');
    screen2.classList.add('active');
    
    }
}


function newTry() {
    location.reload();
}

function play(symbolSpieler){
    

    let symbolComputer = (Math.ceil(Math.random() * 9));
        console.log(symbolComputer);
    if(counter > 0) {
        if(gewinneComputer >= 3){
            addPopUp("Der Computer hat gewonnen!")
        } else if (gewinneSpieler >= 3) {
            addPopUp("Gratulation! Du hast gewonnen!")
        } else {
            if (symbolComputer == 1 && symbolSpieler == 2 && symbolSpieler!=3 && symbolSpieler !=symbolComputer) {
                gewinneSpieler += 1; 
                addPopUp("Der Computer hat Schere gewählt. " + "Spieler " + gewinneSpieler + " Computer " + gewinneComputer)
            }
            else if (symbolComputer == 2 && symbolSpieler == 3 && symbolSpieler!=1 && symbolSpieler !=symbolComputer){
                gewinneSpieler += 1; 
                addPopUp("Der Computer hat Stein gewählt. " + "Spieler " + gewinneSpieler + " Computer " + gewinneComputer)
            }
            else if (symbolComputer == 3 && symbolSpieler == 1 && symbolSpieler!=2 && symbolSpieler !=symbolComputer) {
                gewinneSpieler += 1; 
                addPopUp("Der Computer hat Papier gewählt. " + "Spieler " + gewinneSpieler + " Computer " + gewinneComputer)
            } else if (symbolComputer == symbolSpieler) {
                if(symbolComputer==1) {
                    symbolComputer = 'Schere';
                } else if (symbolComputer==2){
                    symbolComputer = 'Stein';
                } else {
                    symbolComputer = 'Papier';
                }
                addPopUp("Der Computer hat " + symbolComputer + " gewählt. " + " Spieler " + gewinneSpieler + " Computer " + gewinneComputer)
            }
             else {
                gewinneComputer += 1;
                if(symbolComputer==1) {
                    symbolComputer = 'Schere';
                } else if (symbolComputer==2){
                    symbolComputer = 'Stein';
                } else {
                    symbolComputer = 'Papier';
                }
                addPopUp("Der Computer hat " + symbolComputer + " gewählt. " + " Spieler " + gewinneSpieler + " Computer " + gewinneComputer)
            }   

        }

        
    } else {
        addPopUp("Du hast bereits " + (document.getElementById('runden').value) + " Runden gespielt. ");
        
    }

    counter--;     
} 

function addPopUp(text) {

    let popup = document.createElement('div');
        popup.setAttribute('id', 'popUp');
        let myText = document.createElement('p');
        myText.append('Bitte gib eine positive Zahl ein!');
        popup.append(text);
        let button= document.createElement('div');
        button.classList.add('buttonPopUp');

      
        button.addEventListener('click', closePopUp);    

        button.append('OK');
    
       
        popup.append(button);

        document.getElementById('myGame').append(popup);
}

function reloadPage() {
    location.reload();
}


function closePopUp() {
    popUp.remove();
}

/*
function spinIcon() {
    if(symbolComputer==1) {
        'fas fa-cut'= 'fas fa-cut fa-spin';
    }

}
*/
