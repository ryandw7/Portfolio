import { aboutMeP1String, aboutMeP2String } from "./strings.js";

const projectArticles = document.getElementsByClassName("project-article");
const projectArticleText = document.getElementsByClassName("project-article-text");





function eventListeners() {
    for (let i = 0; i < projectArticles.length; i++) {
        projectArticles[i].addEventListener("mouseover", function () {
            projectArticleText[i].style.visibility = 'visible';
            console.log('bruh');
        }
        )
        projectArticles[i].addEventListener("mouseout", function () {
            projectArticleText[i].style.visibility = 'hidden';
            console.log('bruh');
        }
        )
    }
}

eventListeners();
const aboutMeP1 = document.getElementById("about-me-p1");
const aboutMeP2 = document.getElementById("about-me-p2");
let loadCompleted = false;
const title1 = document.getElementById('title1');
const title2 = document.getElementById('title2');
function fadeIn(element) {
    element.style.opacity = 0;
    for (let i = 0; i < 200; i++) {
        setTimeout(() => {
            element.style.opacity = (i * 0.05);
            console.log('bruh');
        }, i * 50)

    }
}


function stringTyper(string1, element1, string2, element2) {
    const char1 = string1.split('');
    const char2 = string1.split('');
    const array1 = [];
    const array2 = [];
    for (let i = 0; i < (string1.length + string2.length); i++) {
        setTimeout(() => {
            array1.pop()
            array1.push(char1[i]);
            array1.push('|')
            element1.textContent = array1.join("");
        }, i * 25);
        setTimeout(() => {
            array2.pop()
            array2.push(char2[i]);
            array2.push('|')
            element2.textContent = array2.join("");
        }, (i + string1.length) * 25);

    }
}


function typep1() {
    stringTyper('test', aboutMe)
}

function typep2() {
    stringTyper('bruh', aboutMe)
}





window.addEventListener("load", () => {
    fadeIn(title1);
    fadeIn(title2)
    console.log('test')
    stringTyper(aboutMeP1String, aboutMeP1, aboutMeP2String, aboutMeP2);
})



