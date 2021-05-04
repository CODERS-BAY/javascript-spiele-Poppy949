console.log("Hallo Spielewelt");


let counter = 1;
let versuche = 1;


function changeScreen() {
    versuche = parseInt(document.getElementById('wuerfe').value);
    if(versuche>0) {
        screen1.classList.remove('active');
        screen2.classList.add('active');
    } else {

    alert('Bitte gib eine positive Zahl ein!')
    
    }
}

entfernungZumMonster = Math.random() * 90 + 10;
entfernungZumMonster = Math.round(entfernungZumMonster)
console.log(entfernungZumMonster)

let monster = document.createTextNode('Entfernung zum Monster: ' + entfernungZumMonster + ' m');
    screen2.prepend(monster);



function monsterWurf (readTries) {
    


    if(versuche < counter) {
        alert('Du hast schon ' + versuche + ' mal gespielt!')
    } else {

    let g = document.getElementById('planeten').value;
    let v0 = document.getElementById('wurfWeite').value;
    let derWinkel = document.getElementById('winkel').value * (Math.PI / 180);
    let wurfWeite = ((v0 * v0) * Math.sin(2 * derWinkel)) / g;
    wurfWeite = Math.round(wurfWeite);
    
    counter++;
     
        if(wurfWeite == entfernungZumMonster) {
            dragon.remove();
            let winner = document.createTextNode('Getroffen! Das Monster ruft jetzt mit deinem Telefon seine Freunde!');
            screen2.append(winner);
            
        } else {
            monster = entfernungZumMonster-wurfWeite;
            // let newMonster = document.createElement('i');
            // newMonster.innerHTML = monster; 
            let nichtGetroffen = 'Nicht getroffen. Entfernung zum Monster: ';
            let neuerVersuch = ' m. Neuer Versuch!';
            result.innerHTML = nichtGetroffen + '<i>' + monster + '</i>' + neuerVersuch;
            //screen2.append(nichtGetroffen);
            //screen2.append(newMonster);
            //screen2.append(neuerVersuch);
        }

        console.log(counter);
        console.log(versuche);

        console.log(wurfWeite);
    }
}
 

