

$(document).ready(function(){
    console.log('Fertig geladen');
    let versuche;
    let pcZahl;
    let counter = 0;

    $('#eingabeVersuche').click(function(){
        versuche = $('#versuche').val();
        if(versuche <1 || isNaN(versuche)) {
        
            alert('Bitte gib eine positive Zahl ein!')
    
        }

    })



    $('#eingabe').click(function() {  
        let obereZahl = $('#obergrenze').val();
        pcZahl=(Math.ceil(Math.random() * obereZahl));

        if(obereZahl <1 || isNaN(obereZahl)) {
        
            alert('Bitte gib eine positive Zahl ein!')
    
        }
    })


        
    
    $('#ok').click(function() {
        
        let gerateneZahl=$('#userzahl').val();
        console.log(versuche);
        console.log(pcZahl);
        console.log(gerateneZahl);

        if(counter < versuche) {
            if(gerateneZahl==pcZahl) {
                $(this).after('<div>Du hast gewonnen!</div>');
            } else if 
            (gerateneZahl>pcZahl) {
                $(this).after('<div>die Zahl ist zu groß</div>');
            } else {
                $(this).after('<div>die Zahl ist zu klein</div>');
            } 
            

        } else {
            addPopUp('Game over')
        }

        counter++;

        });
})    

function addPopUp(text) {

    let popup = document.createElement('div');
        popup.setAttribute('id', 'popUp');
        let myText = document.createElement('p');
        myText.append('Bitte gib eine positive Zahl ein!');
        popup.append(text);
        let button= document.createElement('div');
        button.classList.add('button');

      
        button.addEventListener('click', closePopUp);    

        button.append('OK');
    
       
        popup.append(button);

        document.getElementById('myGame').append(popup);
}

function closePopUp() {
    popUp.remove();
}







