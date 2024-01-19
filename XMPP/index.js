//IMPORT FOR RANK DATA
import { reps } from "./ranking.js";

//NAV STYLE CHANGE FOR MOBILE
function windowCheck(x) {
    if (x.matches) {
        navSpan.style.bottom = "5px";
        docSpan.style.bottom = "5px";
        docSpan.style.rotate = "180deg";
        navSpan.style.rotate = "180deg";
        navList.hidden = true;
        docList.hidden = true;

    } else {
        docSpan.style.bottom = "0px";
        navSpan.style.bottom = "0px";
        navListItems.hidden = false;
        docList.hidden = false;
        docSpan.style.rotate = "0deg";
        navSpan.style.rotate = "0deg";
    }
}

let mobile = window.matchMedia("(max-width: 1170px)");

//GLOBAL CONSTANTS
const header = document.querySelector("h1");
const navListItems = document.getElementsByClassName("nav");
const navListHead = document.getElementById("nav-list-head");
const docListHead = document.getElementById("doc-list-head");
const navList = document.getElementById("nav-list");
const docList = document.getElementById("doc-list");
const navSpan = document.getElementById("nav-span");
const docSpan = document.getElementById("doc-span");
const table = document.querySelector("tbody");
const topXM = document.getElementById("winner");
const raffleWinners = document.getElementById("drawing-winners")
//DETERMINE SCREEN SIZE FOR LIST ITEM DISPLAY
function windowCheckTransitions(x, item) {
    if (x.matches) {
        item.style.display = "inline-block";
    } else {
        item.style.display = "block"
    }
}

//DROPDOWN ANIMATION FOR LIST ITEMS
navListHead.addEventListener('click', () => {
    if (navList.hidden === false) {
        let a = 0;
        if (window.matchMedia("(max-width: 1170px)").matches) {
                    navList.hidden = true;
            
        } else {
            for (let j = (navListItems.length - 1); j > -1; j--) {


                a++;
                windowCheckTransitions(mobile, navListItems[j]);
                setTimeout(() => {
                    setTimeout(() => {
                        navListItems[j].style.opacity = "1"
                    }, 0)
                    setTimeout(() => {
                        navListItems[j].style.opacity = ".8"
                    }, 50)
                    setTimeout(() => {
                        navListItems[j].style.opacity = ".6"
                    }, 100)
                    setTimeout(() => {
                        navListItems[j].style.opacity = ".4"
                    }, 150)
                    setTimeout(() => {
                        navListItems[j].style.opacity = ".2";
                    }, 200)
                    setTimeout(() => {
                        navListItems[j].style.opacity = "0";
                    }, 250)

                }, 150 * a)
            }
            setTimeout(() => {

                navList.hidden = true;
            }, 600)
        }
        navSpan.style.rotate = "180deg";
        navSpan.style.bottom = "5px"
    } else if (navList.hidden === true) {
        navList.hidden = false;
        navSpan.style.rotate = "0deg";
        navSpan.style.bottom = "0px";
       
        if (window.matchMedia("(max-width: 1170px)").matches){
           
        }else{
        for (let i = 0; i < navListItems.length; i++) {
            windowCheckTransitions(mobile, navListItems[i]);
            setTimeout(() => {
                setTimeout(() => {
                    navListItems[i].style.opacity = "0"
                }, 0)
                setTimeout(() => {
                    navListItems[i].style.opacity = ".2"
                }, 50)
                setTimeout(() => {
                    navListItems[i].style.opacity = ".4"
                }, 100)
                setTimeout(() => {
                    navListItems[i].style.opacity = ".6"
                }, 150)
                setTimeout(() => {
                    navListItems[i].style.opacity = ".8"
                }, 200)
                setTimeout(() => {
                    navListItems[i].style.opacity = "1";
                }, 250)
            }, 150 * i)
        }
    }
    }
})

docListHead.addEventListener('click', () => {
    if (docList.hidden === false) {
        docSpan.style.rotate = "180deg";
        docSpan.style.bottom = "5px";
        docList.hidden = true;
    } else if (docList.hidden === true) {
        docList.hidden = false;
        docSpan.style.rotate = "0deg";
        docSpan.style.bottom = "0px";

    }
})



header.addEventListener('click', () => {
    setTimeout(() => {
        header.style.opacity = ".9"
    }, 600)
    setTimeout(() => {
        header.style.opacity = ".7"
    }, 650)
    setTimeout(() => {
        header.style.opacity = ".5"
    }, 700)
    setTimeout(() => {
        header.style.opacity = ".3"
    }, 750)
    setTimeout(() => {
        header.style.opacity = "0"
    }, 800)
})

let sortedReps = reps.sort(
    (rep1, rep2) => (rep1.percentage < rep2.percentage) ? 1 : (rep1.percentage > rep2.percentage) ? -1 : 0);


function changeRank() {
    for (let i = 0; i < sortedReps.length; i++) {
        sortedReps[i].rank = (i + 1);
    }
    for (let i = 0; i < sortedReps.length; i++) {
        let row = table.insertRow(i);
        let cell1 = row.insertCell(0);
        cell1.textContent = sortedReps[i].rank;
        let cell2 = row.insertCell(1);
      cell2.textContent = sortedReps[i].name;
            
        
       
        
        let cell3 = row.insertCell(2);
        cell3.textContent = `${sortedReps[i].percentage.toFixed(2)}%`
    
    }
}

document.querySelector("tr").appendChild(document.createElement("i"));
windowCheck(mobile);

changeRank()

function FillWinners(){
let raffleEntries = []
for(let i = 0; i < reps.length; i++){
    if (reps[i].rank === 1){
        topXM.textContent = `Top XM: ${reps[i].name}`
    }
    if(reps[i].percentage >= 30){
        raffleEntries.push(reps[i].name);
    }
}
raffleEntries = raffleEntries.join(', ')
raffleWinners.textContent = `Raffle Entries: ${raffleEntries} `
console.log(raffleEntries);
}

FillWinners()